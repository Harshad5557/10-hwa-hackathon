"use client";

import * as THREE from "three";
import { useRef, useEffect, useState } from "react";

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
    camera.position.set(0, 2, 7);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(3, 6, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const amberLight = new THREE.PointLight(0xF59E0B, 2.5, 12);
    amberLight.position.set(-2, 1, 3);
    scene.add(amberLight);

    // Materials
    const charcoalMat = new THREE.MeshStandardMaterial({ color: 0x1C1C1E, roughness: 0.6, metalness: 0.35 });
    const charcoalMatte = new THREE.MeshStandardMaterial({ color: 0x1C1C1E, roughness: 0.85, metalness: 0.1 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.18, roughness: 0.05, metalness: 0 });
    const amberMat = new THREE.MeshStandardMaterial({ color: 0xF59E0B, emissive: 0xF59E0B, emissiveIntensity: 1.2 });
    const pcbMat = new THREE.MeshStandardMaterial({ color: 0x2A2A2A, roughness: 0.9, metalness: 0.2 });

    const parts: { mesh: THREE.Mesh; original: THREE.Vector3; offset: THREE.Vector3; isDisk?: boolean }[] = [];

    const addPart = (geo: THREE.BufferGeometry, mat: THREE.Material, pos: THREE.Vector3, offset: THREE.Vector3, isDisk = false) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { original: pos.clone(), offset: offset.clone() };
      scene.add(mesh);
      parts.push({ mesh, original: pos.clone(), offset: offset.clone(), isDisk });
      return mesh;
    };

    // 1. Base (wide stable base)
    addPart(
      new THREE.CylinderGeometry(1.7, 1.7, 0.45, 40),
      charcoalMatte,
      new THREE.Vector3(0, -0.6, 0),
      new THREE.Vector3(0, -2.2, 0)
    );

    // Base inner track/recess
    addPart(
      new THREE.RingGeometry(0.8, 1.55, 40),
      charcoalMat,
      new THREE.Vector3(0, -0.32, 0.01),
      new THREE.Vector3(0, -1.8, 0.01)
    );

    // 2. Amber LED ring (at base level)
    const ledRing = addPart(
      new THREE.TorusGeometry(0.95, 0.035, 24, 64),
      amberMat,
      new THREE.Vector3(0, -0.28, 0.02),
      new THREE.Vector3(0, -2.6, 0.02)
    );
    ledRing.rotation.x = Math.PI / 2;

    // 3. Smart PCB & battery (circular board)
    addPart(
      new THREE.CylinderGeometry(0.75, 0.75, 0.12, 40),
      pcbMat,
      new THREE.Vector3(0, -0.18, 0.03),
      new THREE.Vector3(0, -1.6, 0.03)
    );

    // 4. Gears & motor assembly
    const motorGroup = new THREE.Group();
    const motorBody = addPart(
      new THREE.CylinderGeometry(0.35, 0.35, 0.5, 24),
      charcoalMat,
      new THREE.Vector3(0, 0.08, 0),
      new THREE.Vector3(0, -1.4, 0)
    );
    const motorTop = addPart(
      new THREE.CylinderGeometry(0.2, 0.2, 0.15, 24),
      charcoalMatte,
      new THREE.Vector3(0, 0.4, 0),
      new THREE.Vector3(0, -1.0, 0)
    );
    motorGroup.position.set(0, 0, 0);
    scene.add(motorGroup);
    parts.push({ mesh: motorGroup as unknown as THREE.Mesh, original: new THREE.Vector3(0, 0, 0), offset: new THREE.Vector3(0, -1.4, 0) });

    // 5. Maze Layer 3 (largest, lowest disk)
    const layer3 = addPart(
      new THREE.CylinderGeometry(1.35, 1.35, 0.09, 64),
      charcoalMat,
      new THREE.Vector3(0, 0.15, 0),
      new THREE.Vector3(0, -1.2, 0)
    );
    layer3.userData.isDisk = true;

    // 6. Maze Layer 2 (medium disk)
    const layer2 = addPart(
      new THREE.CylinderGeometry(1.0, 1.0, 0.09, 64),
      charcoalMat,
      new THREE.Vector3(0, 0.27, 0),
      new THREE.Vector3(-1.1, 0, 0)
    );
    layer2.userData.isDisk = true;

    // 7. Maze Layer 1 (smallest, upper disk)
    const layer1 = addPart(
      new THREE.CylinderGeometry(0.7, 0.7, 0.09, 64),
      charcoalMat,
      new THREE.Vector3(0, 0.39, 0),
      new THREE.Vector3(1.1, 0, 0)
    );
    layer1.userData.isDisk = true;

    // 8. Portion gate (ring between hopper and maze layer 1)
    addPart(
      new THREE.RingGeometry(0.85, 0.95, 40),
      charcoalMat,
      new THREE.Vector3(0, 0.48, 0),
      new THREE.Vector3(0, -2.0, 0)
    );

    // 9. Transparent hopper
    const hopper = addPart(
      new THREE.CylinderGeometry(0.9, 0.9, 1.3, 40),
      glassMat,
      new THREE.Vector3(0, 1.15, 0),
      new THREE.Vector3(0, 2.2, 0)
    );
    hopper.userData.original.y = 1.15;

    // 10. Top gap (lid)
    addPart(
      new THREE.CylinderGeometry(0.98, 0.98, 0.18, 40),
      charcoalMatte,
      new THREE.Vector3(0, 1.9, 0),
      new THREE.Vector3(0, 2.8, 0)
    );

    const allMeshes = parts.map((p) => p.mesh);

    const rotationSpeed = 0.006;
    const autoRotate = true;

    const animate = () => {
      requestAnimationFrame(animate);

      const p = Math.min(Math.max(scrollProgress, 0), 1);

      allMeshes.forEach((obj) => {
        const part = parts.find((part) => part.mesh === obj);
        if (!part) return;

        const targetX = part.original.x + part.offset.x * p;
        const targetY = part.original.y + part.offset.y * p;
        const targetZ = part.original.z + part.offset.z * p;
        obj.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.1);

        if (part.isDisk) {
          obj.rotation.y += rotationSpeed * (1 - p * 0.5);
        }
      });

      // Amber LED pulse
      const time = Date.now() * 0.003;
      amberMat.emissiveIntensity = 1.2 + Math.sin(time) * 0.4;

      if (autoRotate) {
        scene.rotation.y += 0.0015 * (1 - p * 0.5);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || 600;
      const h = containerRef.current.clientHeight || 500;
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
