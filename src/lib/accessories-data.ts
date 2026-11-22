export interface Accessory {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  compatibility: string;
  category: "replacement" | "maintenance" | "power";
}

export const ACCESSORIES: Accessory[] = [
  {
    id: "acc-hopper",
    name: "Extra transparent hopper",
    description: "Spare transparent hopper for quick swaps between meals. Food-grade, BPA-free transparent polymer.",
    price: 29,
    image: "/images/accessories/extra-hopper.jpg",
    compatibility: "Compatible with all Feast Forge models",
    category: "replacement",
  },
  {
    id: "acc-gate",
    name: "Replacement portion gate",
    description: "Precision-engineered portion gate for consistent kibble dispensing. Easy to install and clean.",
    price: 19,
    image: "/images/accessories/portion-gate.jpg",
    compatibility: "Compatible with all Feast Forge models",
    category: "replacement",
  },
  {
    id: "acc-usb-c",
    name: "USB-C power adapter",
    description: "Official USB-C power adapter for Feast Forge feeders. 5V/2A output.",
    price: 24,
    image: "/images/accessories/usb-c-adapter.jpg",
    compatibility: "Compatible with all Feast Forge models",
    category: "power",
  },
  {
    id: "acc-brush",
    name: "Cleaning brush set",
    description: "Specialized brushes for hopper and maze disk maintenance. Includes 3 sizes for different components.",
    price: 15,
    image: "/images/accessories/cleaning-brush.jpg",
    compatibility: "Compatible with all Feast Forge models",
    category: "maintenance",
  },
  {
    id: "acc-maze-upper",
    name: "Replacement upper maze disk",
    description: "Spare upper (smallest) maze disk for replacement or configuration experimentation.",
    price: 22,
    image: "/images/accessories/maze-upper.jpg",
    compatibility: "Compatible with all Feast Forge models",
    category: "replacement",
  },
  {
    id: "acc-maze-middle",
    name: "Replacement middle maze disk",
    description: "Spare middle (medium) maze disk for replacement or configuration experimentation.",
    price: 26,
    image: "/images/accessories/maze-middle.jpg",
    compatibility: "Compatible with all Feast Forge models",
    category: "replacement",
  },
  {
    id: "acc-maze-lower",
    name: "Replacement lower maze disk",
    description: "Spare lower (largest) maze disk for replacement or configuration experimentation.",
    price: 32,
    image: "/images/accessories/maze-lower.jpg",
    compatibility: "Compatible with all Feast Forge models",
    category: "replacement",
  },
];

export const CATEGORY_LABELS: Record<string, string> = {
  replacement: "Replacement parts",
  maintenance: "Maintenance",
  power: "Power",
};