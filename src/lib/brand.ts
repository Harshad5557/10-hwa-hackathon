export const COLORS = {
  amber: "#F59E0B",
  charcoal: "#1C1C1E",
  darkBg: "#101010",
  secondaryDark: "#171717",
  cream: "#FFF8F0",
  white: "#FFFFFF",
  muted: "#B8B8B8",
};

export const TYPOGRAPHY = {
  display: "ff-display",
  headingXL: "ff-heading-xl",
  headingLG: "ff-heading-lg",
  headingMD: "ff-heading-md",
  bodyLG: "ff-body-lg",
  body: "ff-body",
  bodySM: "ff-body-sm",
  caption: "ff-caption",
};

export const SPACING = {
  section: "py-20 px-6 lg:py-28 lg:px-8",
  sectionCompact: "py-12 px-6 lg:py-20 lg:px-8",
};

export const BRAND = {
  name: "Feast Forge",
  tagline: "A new puzzle every time.",
  supportingTagline: "Turn everyday feeding into a more engaging experience.",
  colors: COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  product: {
    name: "Feast Forge Smart Feeder Maze",
    tiers: [
      {
        id: "light",
        name: "Feast Forge Light",
        subtitle: "Starter",
        description: "Validated maze library. Manual difficulty. Local controls. Basic portion limits.",
        price: 129,
        features: ["Validated maze library", "Manual difficulty", "Local controls", "Basic portion limits"],
        hopperCapacity: "up to 400g",
      },
      {
        id: "smart",
        name: "Feast Forge Smart",
        subtitle: "Expanded",
        description: "Expanded validated maze library. App pairing. Feeding schedules. Feeding history. Device status. Wi-Fi notifications.",
        price: 199,
        popular: true,
        features: ["Expanded validated maze library", "App pairing", "Feeding schedules", "Feeding history", "Device status", "Wi-Fi notifications"],
        hopperCapacity: "up to 400g",
      },
      {
        id: "pro",
        name: "Feast Forge Pro",
        subtitle: "Full",
        description: "Full validated configuration library. Adaptive difficulty recommendations. Advanced analytics. Expanded app controls.",
        price: 279,
        features: ["Full validated configuration library", "Adaptive difficulty recommendations", "Advanced analytics", "Expanded app controls"],
        hopperCapacity: "up to 400g",
      },
    ],
    specs: [
      { label: "Hopper Capacity", value: "Up to 400g (proposed target)" },
      { label: "Height", value: "Approx. 28cm (proposed target)" },
      { label: "Width", value: "Approx. 22cm (proposed target)" },
      { label: "Rotating Disks", value: "Three" },
      { label: "Index Positions", value: "Four per disk" },
      { label: "Position Combinations", value: "64 theoretical (proposed target)" },
      { label: "Connectivity", value: "USB-C power, Bluetooth Low Energy, Wi-Fi (approach)" },
    ],
    geometry: [
      { id: 1, name: "Top gap", color: "charcoal" },
      { id: 2, name: "Transparent hopper", color: "transparent" },
      { id: 3, name: "Portion gate", color: "charcoal" },
      { id: 4, name: "Maze Layer 1 (smallest)", color: "charcoal" },
      { id: 5, name: "Maze Layer 2 (medium)", color: "charcoal" },
      { id: 6, name: "Maze Layer 3 (largest)", color: "charcoal" },
      { id: 7, name: "Gears & motor assembly", color: "charcoal" },
      { id: 8, name: "Smart PCB & battery", color: "charcoal" },
      { id: 9, name: "Amber LED status ring", color: "amber" },
      { id: 10, name: "Base with Feast Forge Smart branding", color: "charcoal" },
    ],
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/technology", label: "Technology" },
  { href: "/maze-library", label: "Maze Library" },
  { href: "/app", label: "App" },
  { href: "/accessories", label: "Accessories" },
  { href: "/reviews", label: "Reviews" },
  { href: "/support", label: "Support" },
  { href: "/our-story", label: "Our Story" },
];

export const LEGAL_LINKS = [
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
  { href: "/warranty", label: "Warranty" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
