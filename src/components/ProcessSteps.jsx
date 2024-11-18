// src/components/ProcessSteps.jsx
import { useState, useRef } from 'react';
import { motion } from "framer-motion";
const steps = [
  {
    number: "01",
    title: "Apply for our solar service",
    description: "Fast application and approval online or via SunGift Solar",
  },
  {
    number: "02",
    title: "Get your equipment installed",
    description: "SunGift Solar carries out the installation",
  },
  {
    number: "03",
    title: "We pay SunGift Solar",
    description: "No upfront investment from your business",
  },
  {
    number: "04",
    title: "Start benefiting from free energy",
    description: "Use what you can and sell any excess to the grid",
  },
  {
    number: "05",
    title: "We monitor and maintain the installation",
    description: "We manage everything to keep the installation in optimal condition, so you can focus on your core business",
  },
  {
    number: "06",
    title: "Pay monthly, get positive value",
    description: "We guarantee your benefits will be higher than the service fee",
  },
];


const ProcessSteps = () => {
  const [showMore, setShowMore] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = showMore ? 0 : container.scrollWidth - container.clientWidth;
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    setShowMore(!showMore);
  };

  return (
    <section className="py-4 bg-primary/5">
      <div className="container mx-auto">
        <h2 className="section-title text-primary-dark mb-6">How It Works</h2>
        <div className="relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex flex-col md:flex-row gap-2 md:gap-3 transition-all duration-300 md:overflow-x-auto scrollbar-hide scrollbar-transparent"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full md:w-1/4 flex-shrink-1"
              >
                <div className="flex flex-col items-center p-6 md:p-8 hover:bg-primary/10 transition-colors duration-300 rounded-lg h-full">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    className="text-primary text-4xl font-bold mb-2"
                  >
                    {step.number}
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-medium text-primary-dark mb-2">{step.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {steps.length > 4 && (
            <button
              onClick={handleScroll}
              aria-label={showMore ? "Show less steps" : "Show more steps"}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary-dark/80              /* Custom scrollbar styles */
              .scrollbar-transparent::-webkit-scrollbar {
                width: 8px;
                height: 8px;
              }
              
              .scrollbar-transparent::-webkit-scrollbar-track {
                background: transparent;
              }
              
              .scrollbar-transparent::-webkit-scrollbar-thumb {
                background: rgba(0, 0, 0, 0.2);
                border-radius: 4px;
              }
              
              .scrollbar-transparent::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 0, 0, 0.4);
              } text-white p-2 rounded-full hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="text-xl">{showMore ? "←" : "→"}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;