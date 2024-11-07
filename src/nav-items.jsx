import { HomeIcon, InfoIcon, PhoneIcon } from "lucide-react";
import { lazy } from "react";

// Lazy load page components
const Index = lazy(() => import("./pages/Index.jsx"));
const Comparison = lazy(() => import("./pages/Comparison.jsx"));

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Comparison",
    to: "/comparison",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <Comparison />,
  },
  // Additional routes can be added here
];