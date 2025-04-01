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
    title: "Pay monthly, get positive value",
    description: "We guarantee your benefits will be higher than the service fee",
  },
];

const ProcessSteps = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6 relative"> {/* Changed from space-y-12 to space-y-6 */}
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <div className="flex items-center bg-primary-light/10 p-6 rounded-lg hover:shadow-lg transition-all duration-300 relative z-10">
              <span className="text-4xl font-bold text-primary-dark w-20">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-primary-dark w-1/3 px-6">
                {step.title}
              </h3>
              <p className="text-base text-primary-dark/80 flex-1">
                {step.description}
              </p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="absolute left-10 top-full h-6 w-0.5 bg-primary-dark/20"> {/* Changed from h-12 to h-6 */}
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
