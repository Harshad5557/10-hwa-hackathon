export interface ModelTier {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const MODEL_TIERS: ModelTier[] = [
  {
    id: "light",
    name: "Feast Forge Light",
    subtitle: "Starter",
    price: 129,
    image: "/images/product/hero.jpg",
    description: "Validated maze library. Manual difficulty. Local controls. Basic portion limits.",
    features: ["Validated maze library", "Manual difficulty", "Local controls", "Basic portion limits"],
  },
  {
    id: "smart",
    name: "Feast Forge Smart",
    subtitle: "Expanded",
    price: 199,
    image: "/images/product/hero.jpg",
    description: "Expanded validated maze library. App pairing. Feeding schedules. Feeding history. Device status. Wi-Fi notifications.",
    features: ["Expanded validated maze library", "App pairing", "Feeding schedules", "Feeding history", "Device status", "Wi-Fi notifications"],
    popular: true,
  },
  {
    id: "pro",
    name: "Feast Forge Pro",
    subtitle: "Full",
    price: 279,
    image: "/images/product/hero.jpg",
    description: "Full validated configuration library. Adaptive difficulty recommendations. Advanced analytics. Expanded app controls.",
    features: ["Full validated configuration library", "Adaptive difficulty recommendations", "Advanced analytics", "Expanded app controls"],
  },
];

export interface ComparisonFeature {
  label: string;
  key: string;
  light: boolean;
  smart: boolean;
  pro: boolean;
}

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  { label: "Maze library", key: "maze-library", light: true, smart: true, pro: true },
  { label: "Manual difficulty", key: "manual-difficulty", light: true, smart: true, pro: true },
  { label: "Local controls", key: "local-controls", light: true, smart: true, pro: true },
  { label: "App pairing", key: "app-pairing", light: false, smart: true, pro: true },
  { label: "Feeding schedules", key: "feeding-schedules", light: false, smart: true, pro: true },
  { label: "Feeding history", key: "feeding-history", light: false, smart: true, pro: true },
  { label: "Device status", key: "device-status", light: false, smart: true, pro: true },
  { label: "Wi-Fi notifications", key: "wifi-notifications", light: false, smart: true, pro: true },
  { label: "Adaptive difficulty recommendations", key: "adaptive-difficulty", light: false, smart: false, pro: true },
  { label: "Advanced analytics", key: "advanced-analytics", light: false, smart: false, pro: true },
  { label: "Expanded app controls", key: "expanded-app-controls", light: false, smart: false, pro: true },
];

export const COMPARISON_NOTES = {
  title: "Important note",
  text: "Features listed are proposed targets for each tier. Some features may require specific hardware connectivity (Bluetooth Low Energy, Wi-Fi) that is a design intention, not a confirmed operational capability. No safety, behavioral, or performance claims are made beyond intended enrichment use.",
};