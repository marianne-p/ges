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
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import solarPanel1 from '@/img/solar-panel-1.jpg';
import solarPanel2 from '@/img/solar-panel-2.jpg';
import solarPanel3 from '@/img/solar-panel-3.jpg';

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(2);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const backgroundImages = [solarPanel1, solarPanel2, solarPanel3];

  useEffect(() => {
    Promise.all(
      backgroundImages.map(src => {
        const img = new Image();
        img.src = src;
        return new Promise(resolve => img.onload = resolve);
      })
    ).then(() => setImagesLoaded(true));
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex(prev => 
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesLoaded, currentImageIndex]);

  return (
    <div className="min-h-screen roboto-flex-light">
      <section className="relative">
        {/* Previous image layer */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImages[prevImageIndex]})`
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        {/* Current image layer */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
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
                Innovation that unlocks solar for your organisation
              </h1>
              <p className="text-xl mb-8">
                UK’s only Solar Service with Positive Value Guaranteed from Day 1. 
                <br />
                All-inclusive management of solar installations, so you can focus on your core activities while benefitting from green energy.
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
