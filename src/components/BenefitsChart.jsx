import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { year: "Year 1", benefit: 500, fee: 100 },
  { year: "Year 2", benefit: 550, fee: 100 },
  { year: "Year 3", benefit: 600, fee: 100 },
  { year: "Year 4", benefit: 650, fee: 100 },
  { year: "Year 5", benefit: 700, fee: 100 },
];

const BenefitsChart = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Projected Benefits</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="benefit"
                name="Estimated Monthly Benefit"
                stroke="#3ca46c"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="fee"
                name="Monthly Service Fee"
                stroke="#95e8b2"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsChart;