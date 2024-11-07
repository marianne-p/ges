import { useState } from "react";
import { motion } from "framer-motion";
import { LightbulbIcon, HandshakeIcon, UserPlusIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import ProcessSteps from "@/components/ProcessSteps";
import ComparisonPreview from "@/components/ComparisonPreview";
import BenefitsChart from "@/components/BenefitsChart";
import ContactForm from "@/components/ContactForm";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white section-padding min-h-[80vh] flex items-center">
        <div className="container mx-auto">
          {/* Logo and Company Name */}
          <div className="flex items-center mb-8">
            <img 
            src="/favicon.ico" 
            alt="Green Earth Solutions Logo" 
            className="w-12 h-12 mr-3"
          />
          <h2 className="text-2xl font-medium">Green Earth Solutions</h2>
        </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-2xl"
          >
            <h1 className="text-4xl sm:text-6xl font-medium mb-6">
              Unlock the Benefits of Solar for Your Business
            </h1>
            <p className="text-xl mb-8">
              End-to-end management of solar installations, so you can focus on your core business
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Benefits />
      <Services />
      <ProcessSteps />
      <ComparisonPreview />
      <BenefitsChart />
      <ContactForm />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;