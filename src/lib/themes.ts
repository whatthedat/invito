export type EventType = "wedding" | "engagement" | "housewarming" | "birthday";

export interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    muted: string;
  };
  fonts: {
    heading: string;
    body: string;
    decorative?: string;
  };
  styles: {
    container: string;
    card: string;
    border?: string;
  };
}

export const THEMES: Record<EventType, ThemeConfig[]> = {
  wedding: [
    {
      id: "wedding-royal",
      name: "Royal Gold",
      description: "A touch of gold & elegance",
      colors: {
        primary: "#78350f", // amber-900
        secondary: "#92400e", // amber-800
        accent: "#d97706", // amber-600
        background: "#fdfbf7", // ultra-soft cream
        text: "#451a03", // amber-950
        muted: "#92400e",
      },
      fonts: {
        heading: "serif",
        body: "sans",
        decorative: "serif",
      },
      styles: {
        container: "template-wedding-royal",
        card: "bg-[#fdfbf7] shadow-2xl border-[#d97706]/20 border-8 border-double",
        border: "border-amber-600/10",
      },
    },
    {
      id: "wedding-romantic",
      name: "Romantic Floral",
      description: "Soft pastels & poetry",
      colors: {
        primary: "#831843", // pink-900
        secondary: "#db2777", // pink-600
        accent: "#f472b6", // pink-400
        background: "#fff9fa", // very soft pink-50
        text: "#4c0519", // rose-950
        muted: "#9d174d",
      },
      fonts: {
        heading: "serif",
        body: "sans",
        decorative: "cursive",
      },
      styles: {
        container: "template-wedding-romantic",
        card: "bg-white shadow-2xl rounded-[1rem] border-pink-100/50 border-4",
      },
    },
    {
      id: "wedding-modern",
      name: "Modern Minimal",
      description: "Clean, black & white",
      colors: {
        primary: "#000000",
        secondary: "#475569", // slate-600
        accent: "#1e293b", // slate-800
        background: "#ffffff",
        text: "#000000",
        muted: "#64748b", // slate-500
      },
      fonts: {
        heading: "sans",
        body: "sans",
      },
      styles: {
        container: "template-wedding-modern",
        card: "space-y-12",
      },
    },
    {
      id: "wedding-luxury",
      name: "Dark Luxury",
      description: "Slate & gold accents",
      colors: {
        primary: "#fbbf24", // amber-400
        secondary: "#fbbf24",
        accent: "#f59e0b", // amber-500
        background: "#0f172a", // slate-900
        text: "#f8fafc", // slate-50
        muted: "#94a3b8", // slate-400
      },
      fonts: {
        heading: "serif",
        body: "sans",
      },
      styles: {
        container: "template-wedding-luxury",
        card: "bg-slate-900/50 backdrop-blur-sm shadow-2xl border-amber-500/20",
      },
    },
  ],
  engagement: [
    {
      id: "engagement-elegant",
      name: "Elegant Sparkle",
      description: "Sophisticated and bright",
      colors: {
        primary: "#7c3aed", // violet-600
        secondary: "#9333ea", // purple-600
        accent: "#c084fc", // purple-400
        background: "#faf5ff", // purple-50
        text: "#4c1d95", // purple-900
        muted: "#6b21a8",
      },
      fonts: {
        heading: "serif",
        body: "sans",
      },
      styles: {
        container: "template-engagement-elegant",
        card: "bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border-purple-100",
      },
    },
  ],
  housewarming: [
    {
      id: "housewarming-cozy",
      name: "Cozy Home",
      description: "Warm amber tones",
      colors: {
        primary: "#d97706", // amber-600
        secondary: "#92400e", // amber-800
        accent: "#f59e0b", // amber-500
        background: "#fffbeb", // amber-50
        text: "#78350f", // amber-900
        muted: "#b45309",
      },
      fonts: {
        heading: "sans",
        body: "sans",
      },
      styles: {
        container: "template-housewarming-cozy",
        card: "bg-white/80 rounded-3xl shadow-xl border-amber-100",
      },
    },
    {
      id: "housewarming-traditional",
      name: "Traditional",
      description: "Earthy & classic",
      colors: {
        primary: "#92400e", // amber-800
        secondary: "#78350f", // amber-900
        accent: "#854d0e",
        background: "#fdf6e3",
        text: "#451a03",
        muted: "#854d0e",
      },
      fonts: {
        heading: "serif",
        body: "serif",
      },
      styles: {
        container: "template-housewarming-traditional",
        card: "border-8 border-double border-amber-800/30",
      },
    },
    {
      id: "housewarming-minimal",
      name: "Minimal Clean",
      description: "Spacious & bright",
      colors: {
        primary: "#171717",
        secondary: "#404040",
        accent: "#525252",
        background: "#fafafa",
        text: "#171717",
        muted: "#737373",
      },
      fonts: {
        heading: "sans",
        body: "sans",
      },
      styles: {
        container: "template-housewarming-minimal",
        card: "space-y-12",
      },
    },
  ],
  birthday: [
    {
      id: "birthday-fun",
      name: "Fun Colorful",
      description: "Bright gradients",
      colors: {
        primary: "#312e81", // indigo-900
        secondary: "#4f46e5", // indigo-600
        accent: "#db2777", // pink-600
        background: "#eef2ff", // indigo-50
        text: "#1e1b4b", // indigo-950
        muted: "#3730a3",
      },
      fonts: {
        heading: "sans",
        body: "sans",
      },
      styles: {
        container: "template-birthday-fun",
        card: "bg-white/40 backdrop-blur-xl rounded-[3rem] shadow-2xl border-white/50",
      },
    },
    {
      id: "birthday-kids",
      name: "Playful Kids",
      description: "Bouncy & yellow",
      colors: {
        primary: "#1e3a8a", // blue-900
        secondary: "#2563eb", // blue-600
        accent: "#ef4444", // red-500
        background: "#fef08a", // yellow-200
        text: "#1e3a8a",
        muted: "#1d4ed8",
      },
      fonts: {
        heading: "cursive",
        body: "cursive",
      },
      styles: {
        container: "template-birthday-kids",
        card: "bg-white border-8 border-blue-900 rounded-[3rem] shadow-[10px_10px_0px_0px_rgba(30,58,138,1)]",
      },
    },
    {
      id: "birthday-neon",
      name: "Party Neon",
      description: "Dark mode glows",
      colors: {
        primary: "#00ffcc",
        secondary: "#ffffff",
        accent: "#00ffcc",
        background: "#000000",
        text: "#ffffff",
        muted: "#00ffcc",
      },
      fonts: {
        heading: "sans",
        body: "sans",
      },
      styles: {
        container: "template-birthday-neon",
        card: "border border-[#00ffcc] bg-black/50 shadow-[0_0_30px_rgba(0,255,204,0.3)] rounded-2xl",
      },
    },
    {
      id: "birthday-elegant",
      name: "Simple Elegant",
      description: "Sophisticated serif",
      colors: {
        primary: "#1e293b", // slate-800
        secondary: "#475569", // slate-600
        accent: "#64748b", // slate-500
        background: "#f8fafc", // slate-50
        text: "#0f172a", // slate-900
        muted: "#94a3b8",
      },
      fonts: {
        heading: "serif",
        body: "serif",
      },
      styles: {
        container: "template-birthday-elegant",
        card: "space-y-8",
      },
    },
  ],
};

export const getThemeById = (id: string): ThemeConfig | undefined => {
  for (const type in THEMES) {
    const theme = THEMES[type as EventType].find((t) => t.id === id);
    if (theme) return theme;
  }
  return undefined;
};
