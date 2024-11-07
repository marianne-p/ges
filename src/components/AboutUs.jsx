import { motion } from "framer-motion";
import { HandshakeIcon } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">About Us</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="prose prose-lg mx-auto"
        >
          <p className="text-gray-600 text-center">
            We are a leading provider of solar energy solutions for businesses, committed to helping
            organizations reduce their carbon footprint while maximizing energy efficiency. With years
            of experience and a team of dedicated professionals, we deliver customized solar solutions
            that drive sustainable growth and cost savings for our clients.
          </p>
          <p className="text-gray-600 text-center mt-4">
            Our innovative approach combines cutting-edge solar technology with comprehensive energy 
            management strategies. We work closely with each client to design and implement solar 
            solutions that are tailored to their unique operational needs and sustainability goals.
          </p>
          <div className="flex items-center mt-4">
            <p className="text-gray-600 text-center flex-grow">
              Beyond installation, we provide ongoing support and monitoring to ensure optimal 
              performance and maximum return on investment. Our commitment extends beyond the initial 
              project, offering long-term partnerships that help businesses continuously improve their 
              energy efficiency and environmental impact.
            </p>
            <div className="ml-8 hidden md:block">
              <HandshakeIcon 
                size={120} 
                className="text-primary opacity-70" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;