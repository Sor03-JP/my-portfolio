import { Home, Code, User, Send } from "lucide-react";

export const navLinks = [
  {
    href: "#home",
    label: "HOME",
    icon: <Home className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth />,
  },
  {
    href: "#products",
    label: "PRODUCTS",
    icon: <Code className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth />,
  },
  {
    href: "#profile",
    label: "PROFILE",
    icon: <User className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth />,
  },
  {
    href: "#connect",
    label: "CONNECT",
    icon: <Send className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth />,
  },
];