import { HomeIcon, InfoIcon, PhoneIcon } from "lucide-react";
import { lazy } from "react";

// Lazy load page components
const Index = lazy(() => import("./pages/Index.jsx"));
const Comparison = lazy(() => import("./pages/Comparison.jsx"));

const navItems = [
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
  {
    title: "Comparison Preview",
    to: "/#comparison-preview",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <Index />, // Ensure this points to the correct page component
  },
  // Additional routes can be added here
];

export default navItems;