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
import CaseStudyReview from "@/components/CaseStudy";
import GES_logo from "../img/GES_logo.png";

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
        <div className="relative text-white section-padding min-h-[30vh] flex items-start sm:items-center">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6 sm:mb-8 gap-3 sm:gap-5 md:gap-6">
              <img
                src={GES_logo}
                alt="Green Earth Solutions Logo"
                className="h-20 sm:h-36 object-contain rounded-lg"
              />
              <div className="flex-1">
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-medium light-300 leading-tight">
                  Innovation that unlocks{" "}
                  <br className="hidden sm:block" />
                  solar for your organisation
                </h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left max-w-2xl"
            >

              <p className="text-lg sm:text-xl mb-6 sm:mb-8">
                UK’s only Solar Service with Positive Value Guaranteed from Day 1.{" "}
                <br className="hidden sm:block" />
                <span className="lg:whitespace-nowrap">
                  All-inclusive management of solar installations, so you can focus 
                  on your core activities while benefitting from green energy.
                </span>
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold text-lg sm:text-xl"
                onClick={() => 
                  document.getElementById("ContactForm").scrollIntoView({ behavior: "smooth" })}
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
      
      <div id="Wonford-Green-Case-Study" className="scroll-mt-24">
        <CaseStudyReview />  
      </div>
      
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
