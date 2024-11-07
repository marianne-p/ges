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
    title: "Pay monthly service fee, with positive value guarantee",
    description: "We guarantee your benefits will be higher than the service fee",
  },
];

const ProcessSteps = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container mx-auto">
        <h2 className="section-title text-primary-dark">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="flex items-start space-x-4 p-6 hover:bg-primary/10 transition-colors duration-300 rounded-lg">
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
                  className="text-primary text-4xl font-bold"
                >
                  {step.number}
                </motion.div>
                <div>
                  <h3 className="text-xl font-medium text-primary-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;