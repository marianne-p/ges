import { motion } from "framer-motion";
import { Settings2Icon, SunIcon, BarChart3Icon, BuildingIcon, WrenchIcon, PhoneIcon, MonitorPauseIcon, FileIcon, BadgeDollarSign, DollarSignIcon, KeyIcon, BatteryIcon, SaveIcon, IndentDecreaseIcon, CircleArrowOutDownRightIcon, MoveDownIcon, ThumbsUpIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <SunIcon className="h-8 w-8" />,
    title: "No upfront investment",
    description: "Installation fully funded by us, designed with you to meet the needs of your business",
  },
  {
    icon: <Settings2Icon className="h-8 w-8" />,
    title: "Benefits go to you",
    description: "Energy used by your business, or sold back to the grid – profits go back to you",
  },
  {
    icon: <DollarSignIcon className="h-8 w-8" />,
    title: "Set monthly service fee",
    description: "You know exactly what the costs will be over time - no surprises",
  },
  {
    icon: <BarChart3Icon className="h-8 w-8" />,
    title: "Positive value guarantee",
    description: "We guarantee that your benefits will be higher than the service fee, with positive cashflow from Year 1",
  },
  {
    icon: <ThumbsUpIcon className="h-8 w-8" />,
    title: "No ongoing maintenance",
    description: "We manage the installation to ensure peak performance, with no hassle or additional spend by you",
  },
  {
    icon: <FileIcon className="h-8 w-8" />,
    title: "Simple contract",
    description: "No complex leases, waivers or obligations",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Solar service solution</h2>
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex gap-4 max-w-3xl">
            <div className="w-1 bg-[#95e8b2] rounded shrink-0"></div>
            <p className="section-subtitle text-gray-600 text-center space-x-1">End-to-end solution for complete peace of mind. We design, install, monitor, maintain, repair and insure the installation. You use the energy generated and are paid for any surplus exported, with no initial capital outlay, in exchange for a monthly service fee. We guarantee positive value for you, i.e., that the financial benefits of the installation are higher than the service fee.</p>
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
            >
              <Card className="text-center p-6 bg-[#202729] hover:bg-[#3ca46c] transition-colors duration-300">
                <div className="mb-4 text-[#95e8b2] flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-light mb-2 text-white font-['Roboto_Flex']">{service.title}</h3>
                <p className="text-gray-300 font-light font-['Roboto_Flex']">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;