import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SquareCheckBig, BadgePoundSterling, ThumbsUp, ChartNoAxesCombined, Wrench, File } from "lucide-react";

const services = [
  {
    icon: <SquareCheckBig className="h-8 w-8" />,
    title: "No upfront investment",
    description: "Installation fully funded by us, designed with you to meet the needs of your organisation",
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "No ongoing maintenance",
    description: "We manage the installation and its performance, with no hassle or additional spend by you",
  },
  {
    icon: <BadgePoundSterling className="h-8 w-8" />,
    title: "Benefits go to you",
    description: "Energy used by your organisation, or sold back to the grid – profits go back to you",
  },
  {
    icon: <ThumbsUp className="h-8 w-8" />,
    title: "Fixed service fee",
    description: "You know exactly what the costs will be over time - no surprises",
  },
  {
    icon: <ChartNoAxesCombined className="h-8 w-8" />,
    title: "Positive value guarantee",
    description: "We guarantee that your benefits will be higher than the service fee, with positive cashflow from Year 1",
  },
  {
    icon: <File className="h-8 w-8" />,
    title: "Simple contract",
    description: "No complex leases, waivers or obligations",
  },
];

const Services = () => {
  return (
    <section id="solar-solution" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Solar Service</h2>
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex gap-4 max-w-3xl">
            <div className="w-1 bg-[#95e8b2] rounded shrink-0"></div>
            <p className="section-subtitle text-xl text-[#202729] text-center space-x-1">
              All-inclusive solution for complete peace of mind. We design, install, monitor, maintain, repair and insure the installation. You use the energy generated and are paid for any surplus exported, with no initial capital outlay, in exchange for a fixed service fee. We guarantee positive value for you, i.e., that the financial benefits of the installation are higher than the service fee.
            </p>
            <div className="w-1 bg-[#95e8b2] rounded shrink-0"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex h-full w-full"
            >
              <Card className="flex flex-col justify-between text-center p-6 bg-[#202729] hover:bg-[#3ca46c] transition-colors duration-300 h-full w-full">
                <div className="flex flex-col items-center mb-4">
                  <div className="text-[#95e8b2] flex justify-center mb-2">{service.icon}</div>
                  <h3 className="text-xl font-light mb-2 text-white font-['Roboto_Flex']">{service.title}</h3>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-gray-300 font-light font-['Roboto_Flex']">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
