"use client";

import * as THREE from "three";
import { useRef, useEffect, useState, useCallback } from "react";

interface ShatteredViewerProps {
  className?: string;
  scrollProgress?: number; // 0 = assembled, 1 = scattered
}

export function ShatteredProductViewer({ className, scrollProgress = 0 }: ShatteredViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 600;
    const height = containerRef.current.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2, 6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const amberLight = new THREE.PointLight(0xFD9E0B, 2, 10);
    amberLight.position.set(-3, 2, 3);
    scene.add(amberLight);

    // Materials
    const charcoalMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1e, roughness: 0.6, metalness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, roughness: 0.1, metalness: 0 });
    const amberMat = new THREE.MeshStandardMaterial({ color: 0xFD9E0B, emissive: 0xFD9E0B, emissiveIntensity: 1.5 });

    // Base
    const baseGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.4, 32);
    const base = new THREE.Mesh(baseGeo, charcoalMat);
    base.position.y = -0.5;
    base.userData = { originalPos: base.position.clone(), offset: new THREE.Vector3(0, -1.5, 0) };
    scene.add(base);

    // Hopper (transparent cylinder)
    const hopperGeo = new THREE.CylinderGeometry(0.9, 0.9, 1.4, 32);
    const hopper = new THREE.Mesh(hopperGeo, glassMat);
    hopper.position.y = 0.4;
    hopper.userData = { originalPos: hopper.position.clone(), offset: new THREE.Vector3(0, 2, 0) };
    scene.add(hopper);

    // Portion gate (ring)
    const gateGeo = new THREE.RingGeometry(0.85, 0.95, 32);
    const gate = new THREE.Mesh(gateGeo, charcoalMat);
    gate.rotation.x = Math.PI / 2;
    gate.position.y = -0.3;
    gate.userData = { originalPos: gate.position.clone(), offset: new THREE.Vector3(0, -2, 0) };
    scene.add(gate);

    // Three maze disks (smallest upper, medium middle, largest lower)
    const disks: THREE.Mesh[] = [];
    const diskData = [
      { radius: 0.7, height: 0.08, y: 0.15, label: "upper" },
      { radius: 1.0, height: 0.08, y: 0.05, label: "middle" },
      { radius: 1.35, height: 0.08, y: -0.05, label: "lower" },
    ];

    diskData.forEach((d, i) => {
      const geo = new THREE.CylinderGeometry(d.radius, d.radius, d.height, 64);
      const disk = new THREE.Mesh(geo, charcoalMat);
      disk.position.y = d.y;
      disk.userData = { originalPos: disk.position.clone(), offset: new THREE.Vector3((i - 1) * 1.2, 0, 0) };
      scene.add(disk);
      disks.push(disk);
    });

    // Amber LED ring
    const ledGeo = new THREE.TorusGeometry(0.92, 0.03, 16, 64);
    const ledRing = new THREE.Mesh(ledGeo, amberMat);
    ledRing.rotation.x = Math.PI / 2;
    ledRing.position.y = -0.28;
    ledRing.userData = { originalPos: ledRing.position.clone(), offset: new THREE.Vector3(0, -2.5, 0) };
    scene.add(ledRing);

    // Sensors/control electronics (small box)
    const sensorGeo = new THREE.BoxGeometry(0.4, 0.2, 0.4);
    const sensor = new THREE.Mesh(sensorGeo, charcoalMat);
    sensor.position.set(1.2, -0.4, 0);
    sensor.userData = { originalPos: sensor.position.clone(), offset: new THREE.Vector3(2.5, 0, 0) };
    scene.add(sensor);

    // Motor (cylinder behind base)
    const motorGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.5, 16);
    const motor = new THREE.Mesh(motorGeo, charcoalMat);
    motor.position.set(-1.2, -0.5, -0.5);
    motor.userData = { originalPos: motor.position.clone(), offset: new THREE.Vector3(-2.5, 0, 0) };
    scene.add(motor);

    const allObjects = [base, hopper, gate, ...disks, ledRing, sensor, motor];

    let rotationSpeed = 0.008;
    const autoRotate = true;

    const animate = () => {
      requestAnimationFrame(animate);

      const p = Math.min(Math.max(scrollProgress, 0), 1);

      // Interpolate each object between original and scattered position
      allObjects.forEach((obj) => {
        const targetX = obj.userData.originalPos.x + obj.userData.offset.x * p;
        const targetY = obj.userData.originalPos.y + obj.userData.offset.y * p;
        const targetZ = obj.userData.originalPos.z + obj.userData.offset.z * p;
        obj.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.1);

        // Rotate disks
        if (disks.includes(obj)) {
          obj.rotation.y += rotationSpeed * (1 - p * 0.5);
        }
      });

      // Amber ring pulses
      ledRing.material.emissiveIntensity = 1.5 + Math.sin(Date.now() * 0.005) * 0.5;

      if (autoRotate) {
        scene.rotation.y += 0.002 * (1 - p * 0.5);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = containerRef.current!.clientWidth || 600;
      const h = containerRef.current!.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    setIsReady(true);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current!.removeChild(renderer.domElement);
    };
  }, [scrollProgress]);

  if (!isReady) {
    return (
      <div className={`relative flex items-center justify-center min-h-[400px] bg-charcoal ${className ?? ""}`}>
        <div className="text-muted animate-pulse">Loading product visualization&hellip;</div>
      </div>
    );
  }

  return <div className={`relative w-full min-h-[400px] ${className ?? ""}`} ref={containerRef} />;
}
