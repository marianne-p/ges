import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const comparisonData = [
  { feature: "System Size", basic: "Up to 10kW", pro: "Up to 50kW", enterprise: "Custom" },
  { feature: "Monitoring", basic: "Basic", pro: "Advanced", enterprise: "Premium" },
  { feature: "Support", basic: "Email", pro: "Email + Phone", enterprise: "24/7 Dedicated" },
  { feature: "Installation Time", basic: "2-3 weeks", pro: "3-4 weeks", enterprise: "Custom" },
  { feature: "Warranty", basic: "10 years", pro: "15 years", enterprise: "20 years" },
  { feature: "Performance Guarantee", basic: "Basic", pro: "Enhanced", enterprise: "Premium" },
  { feature: "Maintenance Visits", basic: "Annual", pro: "Bi-annual", enterprise: "Quarterly" },
  { feature: "Energy Storage", basic: "Optional", pro: "Included", enterprise: "Advanced" },
  { feature: "Remote Monitoring", basic: "Basic", pro: "Advanced", enterprise: "Enterprise" },
  { feature: "ROI Analysis", basic: "Basic", pro: "Detailed", enterprise: "Comprehensive" },
  { feature: "Training", basic: "Basic", pro: "Advanced", enterprise: "Custom" },
  { feature: "Upgrades", basic: "Not included", pro: "Available", enterprise: "Priority" },
];

const Comparison = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-medium text-center mb-12">Detailed Solution Comparison</h1>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Features</TableHead>
                  <TableHead>Basic</TableHead>
                  <TableHead>Professional</TableHead>
                  <TableHead>Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell>{row.basic}</TableCell>
                    <TableCell>{row.pro}</TableCell>
                    <TableCell>{row.enterprise}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Comparison;