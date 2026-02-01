// src/components/ProcessSteps.jsx
import { useState, useRef } from 'react';
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Apply for our solar service",
    description: "Fast application and approval online for an installation tailored to your requirements",
  },
  {
    number: "02",
    title: "Get your equipment installed",
    description: "Installation carried out by an award-winning local installer",
  },
  {
    number: "03",
    title: "We pay for the installation",
    description: "No upfront investment from your organisation",
  },
  {
    number: "04",
    title: "Start benefiting from free energy",
    description: "Use what you need and sell any excess to the grid",
  },
  {
    number: "05",
    title: "We monitor and maintain the installation",
    description: "We manage everything to keep the installation in optimal condition, so you can focus on your core activities",
  },
  {
    number: "06",
    title: "Get positive value, guaranteed",
    description: "We guarantee your benefits will be higher than the service fee",
  },
];

const ProcessSteps = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className='mb-6 sm:mb-10'>
        <h2 className="section-title">How it works</h2>
      </div>
      <div className="space-y-4 sm:space-y-6 relative"> {/* Changed from space-y-12 to space-y-6 */}
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <div className="
                flex flex-col sm:flex-row
                items-start sm:items-center 
                bg-primary-light/10 
                p-4 sm:p-6 rounded-lg 
                hover:shadow-lg transition-all duration-300 
                relative z-10
                gap-2 sm:gap-0
             "
            >
              <span className="text-2xl sm:text-4xl font-bold text-primary-dark w-auto sm:w-20">
                {step.number}
              </span>
              <h3 className="
              text-base sm:text-xl 
              font-semibold text-primary-dark 
              w-full sm:w-1/3 px-0 sm:px-6 leading-snug">
                {step.title}
              </h3>
              <p className="
              text-sm sm:text-base 
              text-primary-dark/80 w-full sm:flex-1 leading-relaxed">
                {step.description}
              </p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="
                absolute 
                left-4 sm:left-10 
                top-full h-3 sm:h-6 w-0.5 bg-primary-dark/20
              ">
                <div className="absolute -left-1.5 bottom-0 h-3 w-3 rounded-full bg-primary-dark/40" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
