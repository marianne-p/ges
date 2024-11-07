import { motion } from "framer-motion";
import { HandshakeIcon } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">About Us</h2>
        <p className="text-gray-600 text-center mt-4">
          Have you ever wondered why more businesses aren’t using solar? So did we - and then we understood. You need to become a solar expert instead of focussing on your own business, and invest thousands of pounds of capital (or borrow money at high interest rates) to do so. Alternatively, you sign a highly complex power purchase agreement (PPA) and hand over your roof/land to a mini energy company who sells you the energy a bit cheaper than the grid. If we had to make a choice, we wouldn’t choose either.
        </p>
        <p className="text-gray-600 text-center mt-4">
          That’s how Green Earth Solutions and our innovative solar service were born. Our aim is to help more businesses benefit from solar installations – and we really mean benefit. We believe that a solar installation which is professionally monitored and maintained can be hugely profitable. We want to unlock this for businesses without the need for them to become solar experts – that’s our role. We combine expertise from commercial strategy, finance and solar operations to bring a better option to businesses interested in solar.
        </p>
        <div className="flex flex-col md:flex-row items-center mt-4">
        <p className="text-gray-600 text-center mt-4">
          Based in Exeter in Devon, we pride ourselves on tailoring our solar service solution to the customer needs – we know that each installation is unique. This is also why we’ve partnered with SunGift Solar, Solar PV Installer of the Year 2024, to ensure highest quality and long term value for our customers.
        </p>
          <div className="ml-0 md:ml-8 mt-4 md:mt-0 text-center w-full md:w-1/2">
            <p className="text-gray-600 text-s mb-2 italic">In partnership with</p>
            <a href="https://www.sungiftsolar.co.uk" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.sungiftsolar.co.uk/wp-content/uploads/2021/04/SGS2logo198flat.jpg" 
                alt="SunGift Solar Logo" 
                className="w-auto mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;