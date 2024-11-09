import { motion } from "framer-motion";
import { LightbulbIcon, HandshakeIcon, UserPlusIcon, LeafyGreenIcon, LeafIcon, HandHelpingIcon, HandHeartIcon, HeartHandshakeIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: <LeafIcon className="h-8 w-8" />,
    title: "Green and clean",
    description: "We help you harness clean energy for a sustainable future - in both financial and environmental terms",
  },
  {
    icon: <HandshakeIcon className="h-8 w-8" />,
    title: "Invested in your success",
    description: "We only benefit when you benefit – that’s why we offer our positive value guarantee",
  },
  {
    icon: <LightbulbIcon className="h-8 w-8" />,
    title: "Innovative",
    description: "We find new ways to solve problems and design solutions that work for our customers",
  },
];

const Benefits = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Our Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6">
                <div className="mb-4 text-primary flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;