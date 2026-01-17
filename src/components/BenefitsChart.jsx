import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: "1", benefit: 9575, fee: 5160 },
  { year: "2", benefit: 9966, fee: 5315 },
  { year: "3", benefit: 10435, fee: 5474 },
  { year: "4", benefit: 10926, fee: 5638 },
  { year: "5", benefit: 11440, fee: 5808 },
  { year: "6", benefit: 11980, fee: 5982 },
  { year: "7", benefit: 12547, fee: 6161 },
  { year: "8", benefit: 13141, fee: 6346 },
  { year: "9", benefit: 13764, fee: 6537 },
  { year: "10", benefit: 14417, fee: 6733 },
  { year: "11", benefit: 15103, fee: 6935 },
  { year: "12", benefit: 15822, fee: 7143 },
  { year: "13", benefit: 16576, fee: 7357 },
  { year: "14", benefit: 17368, fee: 7578 },
  { year: "15", benefit: 18198, fee: 7805 },
  { year: "16", benefit: 19069, fee: 8039 },
  { year: "17", benefit: 19983, fee: 8280 },
  { year: "18", benefit: 20941, fee: 8529 },
  { year: "19", benefit: 21947, fee: 8785 },
  { year: "20", benefit: 23003, fee: 9048 },
  { year: "21", benefit: 24110, fee: 9320 },
  { year: "22", benefit: 25272, fee: 9599 },
  { year: "23", benefit: 26492, fee: 9887 },
  { year: "24", benefit: 27771, fee: 10184 },
  { year: "25", benefit: 29114, fee: 10489 },
];

const filteredData = data.filter(d => [1, 5, 10, 15, 20, 25].includes(parseInt(d.year)));

const BenefitsChart = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Example: your benefits over time</h2>

        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" ticks={["1", "5", "10", "15", "20", "25"]} label={{ value: "Agreement year", position: "insideBottomRight", offset: -10 }} />
                <YAxis tickFormatter={(value) => `£${value}`} />
                <Tooltip formatter={(value) => `£${value}`} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="benefit"
                  name="Your Annual Benefits"
                  stroke="#3ca46c"
                  strokeWidth={2}
                  dot={filteredData.map(d => ({ cx: d.year, cy: d.benefit }))}
                />
                <Line
                  type="monotone"
                  dataKey="fee"
                  name="Annual Service Fee"
                  stroke="#808080" // Changed to grey
                  strokeWidth={2}
                  dot={filteredData.map(d => ({ cx: d.year, cy: d.fee }))}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
          <div className="p-8 rounded-lg text-left text-gray-800 mt-6 mb-10 border border-gray-400 bg-primary-light/20 shadow-lg">
            <p className="text-xl mb-4">
              For a <span className="font-bold">typical 50kW installation</span> and a <span className="font-bold">25 year Solar Service agreement</span> (with early buy-out option at any time), you can expect:
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-2 text-lg">
              <li>
                <span className="font-bold">£252,000 in benefits (net of service fees)</span> for your organisation over the term duration
              </li>
              <li>
                <span className="font-bold">Year 1 benefits of £9,600</span> in electricity savings and export revenues
              </li>
              <li>
                <span className="font-bold">£5,200 annual service fee</span> in Year 1, with <span className="font-bold">Positive Value Guarantee</span> - your benefits will always be more that the fees
              </li>
              <li>
                <span className="font-bold">Positive cashflow</span> for your organisation from <span className="font-bold">Day 1</span>
              </li>

            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsChart;
