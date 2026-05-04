import { motion } from "framer-motion";

import energyAwards from "../img/Energy Awards 2026 - Trusted Energy Partner.png";
import exeterAwards from "../img/exeter-sustainability-awards.jpg";
import gesAward from "../img/GES Highly Commended.png";

const awards = [
  {
    image: energyAwards,
    alt: "The Energy Awards 2026 - Trusted Energy Partner Award",
    imageClass: "max-w-[220px]",
  },
  {
    image: gesAward,
    alt: "South West Energy Efficiency Awards - Highly Commended",
    imageClass: "max-w-[220px]",
  },
  {
    image: exeterAwards,
    alt: "Exeter Sustainability Awards",
    imageClass: "max-w-[220px]",
  },
];

const OurAwards = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Our Awards</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center">
          {awards.map((award, index) => (
            <motion.div
              key={award.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-full max-w-[280px] h-[160px]"
            >
              <img
                src={award.image}
                alt={award.alt}
                className={`w-full h-[130px] object-contain ${award.imageClass}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAwards;