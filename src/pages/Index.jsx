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
import favicon from "./../../favicon.ico";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import solarPanel1 from '@/img/solar-panel-1.jpg';
import solarPanel2 from '@/img/solar-panel-2.jpg';
import solarPanel3 from '@/img/solar-panel-3.jpg';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    solarPanel1,
    solarPanel2,
    solarPanel3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen roboto-flex-light">
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease"
          style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})`, opacity: isVisible }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary/70"></div>
        <div className="relative text-white section-padding min-h-[80vh] flex items-center">
          <div className="container mx-auto">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl font-medium">Green Earth Solutions</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left max-w-2xl"
            >
              <h1 className="text-4xl sm:text-6xl font-medium mb-6 light-300">
                Unlock the Benefits of Solar for Your Business
              </h1>
              <p className="text-xl mb-8">
                End-to-end management of solar installations, so you can focus on your core business
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => document.getElementById("solar-solution").scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
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