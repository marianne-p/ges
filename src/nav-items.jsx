import { HomeIcon, InfoIcon, PhoneIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Comparison from "./pages/Comparison.jsx";

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
];