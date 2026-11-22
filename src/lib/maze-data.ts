export interface MazeConfig {
  id: string;
  name: string;
  layer: "upper" | "middle" | "lower";
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  dogs: string;
  description: string;
  tier: "light" | "smart" | "pro";
}

export const MAZE_CONFIGS: MazeConfig[] = [
  // Upper layer (smallest)
  { id: "u-spiral", name: "Spiral Chase", layer: "upper", difficulty: "Beginner", dogs: "All sizes", description: "A gentle spiral path that encourages steady pawing and nose work.", tier: "light" },
  { id: "u-zigzag", name: "Zigzag Sprint", layer: "upper", difficulty: "Intermediate", dogs: "Medium & large", description: "Alternating channels that require precise paw placement.", tier: "smart" },
  { id: "u-labyrinth", name: "Mini Labyrinth", layer: "upper", difficulty: "Advanced", dogs: "Experienced solvers", description: "Compact maze with multiple dead ends and a single exit point.", tier: "pro" },

  // Middle layer (medium)
  { id: "m-spin", name: "Spin & Seek", layer: "middle", difficulty: "Beginner", dogs: "All sizes", description: "Requires coordinated disk rotation to align treat pockets.", tier: "light" },
  { id: "m-double", name: "Double Lock", layer: "middle", difficulty: "Intermediate", dogs: "Medium & large", description: "Two aligned channels that must be cleared simultaneously.", tier: "smart" },
  { id: "m-vortex", name: "Vortex Spiral", layer: "middle", difficulty: "Advanced", dogs: "High-drive dogs", description: "Complex multi-layer spiral with delayed release timing.", tier: "pro" },
  { id: "m-maze", name: "Maze Master", layer: "middle", difficulty: "Expert", dogs: "Experienced solvers", description: "Maximum complexity with overlapping paths and multiple false exits.", tier: "pro" },

  // Lower layer (largest)
  { id: "l-wide", name: "Wide Wander", layer: "lower", difficulty: "Beginner", dogs: "All sizes", description: "Broad channels that are easy to navigate for first-time solvers.", tier: "light" },
  { id: "l-tunnel", name: "Tunnel Run", layer: "lower", difficulty: "Intermediate", dogs: "Medium & large", description: "Long enclosed channels that require sustained nose work.", tier: "smart" },
  { id: "l-complex", name: "Complex Path", layer: "lower", difficulty: "Advanced", dogs: "High-drive dogs", description: "Multi-branch paths with several decision points.", tier: "pro" },
  { id: "l-ultimate", name: "Ultimate Challenge", layer: "lower", difficulty: "Expert", dogs: "Experienced solvers", description: "Maximum difficulty with the largest disk surface area.", tier: "pro" },
];

export const LAYER_INFO = {
  upper: {
    name: "Upper Disk",
    size: "Smallest",
    description: "The entry point. Kibble enters through the top layer first. Smallest surface area means fewer, tighter channels.",
    diameter: "Smallest of the three disks",
    color: "charcoal",
  },
  middle: {
    name: "Middle Disk",
    size: "Medium",
    description: "The redirect. Changes kibble direction between layers. Medium surface area allows moderate complexity.",
    diameter: "Medium-sized disk",
    color: "charcoal",
  },
  lower: {
    name: "Lower Disk",
    size: "Largest",
    description: "The final path. Controls how kibble exits to the portion gate. Largest surface area enables the most complex configurations.",
    diameter: "Largest of the three disks",
    color: "charcoal",
  },
};

export const TIER_LABELS: Record<string, string> = {
  light: "Feast Forge Light",
  smart: "Feast Forge Smart",
  pro: "Feast Forge Pro",
};

export const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: "bg-green-500/20 text-green-400",
  Intermediate: "bg-amber-500/20 text-amber-400",
  Advanced: "bg-orange-500/20 text-orange-400",
  Expert: "bg-red-500/20 text-red-400",
};