import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: "1", benefit: 960, fee: 475 },
  { year: "2", benefit: 979, fee: 484 },
  { year: "3", benefit: 999, fee: 494 },
  { year: "4", benefit: 1019, fee: 504 },
  { year: "5", benefit: 1039, fee: 514 },
  { year: "6", benefit: 1060, fee: 524 },
  { year: "7", benefit: 1081, fee: 535 },
  { year: "8", benefit: 1103, fee: 545 },
  { year: "9", benefit: 1125, fee: 556 },
  { year: "10", benefit: 1148, fee: 567 },
  { year: "11", benefit: 1171, fee: 579 },
  { year: "12", benefit: 1194, fee: 590 },
  { year: "13", benefit: 1218, fee: 602 },
  { year: "14", benefit: 1242, fee: 614 },
  { year: "15", benefit: 1267, fee: 626 },
  { year: "16", benefit: 1292, fee: 639 },
  { year: "17", benefit: 1318, fee: 652 },
  { year: "18", benefit: 1345, fee: 665 },
  { year: "19", benefit: 1372, fee: 678 },
  { year: "20", benefit: 1399, fee: 691 },
  { year: "21", benefit: 1427, fee: 705 },
  { year: "22", benefit: 1455, fee: 719 },
  { year: "23", benefit: 1485, fee: 734 },
  { year: "24", benefit: 1514, fee: 748 },
  { year: "25", benefit: 1545, fee: 763 },
];

const filteredData = data.filter(d => [1, 5, 10, 15, 20, 25].includes(parseInt(d.year)));

const BenefitsChart = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Your monthly benefit vs service fee</h2>

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
                  name="Estimated Monthly Benefit"
                  stroke="#3ca46c"
                  strokeWidth={2}
                  dot={filteredData.map(d => ({ cx: d.year, cy: d.benefit }))}
                />
                <Line
                  type="monotone"
                  dataKey="fee"
                  name="Monthly Service Fee"
                  stroke="#808080" // Changed to grey
                  strokeWidth={2}
                  dot={filteredData.map(d => ({ cx: d.year, cy: d.fee }))}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
          <div className="p-8 rounded-lg text-left text-gray-800 mt-6 mb-10 border border-gray-400 bg-primary-light/20 shadow-lg">
            <p className="text-xl mb-4">
              For a <span className="font-bold">typical 50kW installation</span> in the South West and a <span className="font-bold">25 year Solar Service agreement</span> (with early buy-out option at any time), you can expect:
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-2 text-lg">
              <li>
                <span className="font-bold">£186,500 in benefits to your business</span>, net of the service fee, over the term duration
              </li>
              <li>
                <span className="font-bold">£475 monthly service fee</span> in Year 1, with <span className="font-bold">positive value guarantee</span>
              </li>
              <li>
                <span className="font-bold">£960 per month</span> in <span className="font-bold">benefits to your business</span> in Year 1
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsChart;