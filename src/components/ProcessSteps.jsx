import { motion } from "framer-motion";
import { useState } from 'react';
//import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

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
        <div className="relative">
          <div 
            ref={containerRef}
            className="flex flex-col md:flex-row gap-2 md:gap-3 transition-all duration-300 md:overflow-x-auto md:scroll-smooth"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full md:w-1/4 flex-shrink-0"
              >
                {/* Rest of step content remains the same */}
              </motion.div>
            ))}
          </div>
          
          {steps.length > 4 && (
            <button
              onClick={handleScroll}
              aria-label={showMore ? "Show less steps" : "Show more steps"}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
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