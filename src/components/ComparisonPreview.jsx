import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const ComparisonPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="comparison-preview" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Comparison to other options</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
<Table className="grid">
  {/* Header */}
  <TableHeader>
    <TableRow className="grid grid-cols-[15%_1fr_1fr_1fr]">
      {/* Narrow leftmost column */}
      <TableHead className="bg-gray-800 text-white text-base"> </TableHead>
      {/* Equal-width columns */}
      <TableHead className="bg-gray-800 text-white text-base">Solar service solution</TableHead>
      <TableHead className="bg-gray-800 text-white text-base">Asset finance (lease / hire purchase)</TableHead>
      <TableHead className="bg-gray-800 text-white text-base">PPA (power purchase agreement)</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* Repeat for each row */}
    <TableRow className="grid grid-cols-[15%_1fr_1fr_1fr]">
      <TableCell className="bg-gray-800 text-white text-base">Who is the provider</TableCell>
      <TableCell className="bg-primary-light/30 text-base">Green Earth Solutions</TableCell>
      <TableCell className="text-base">Other providers (brokers or asset finance specialists)</TableCell>
      <TableCell className="text-base">Other providers (brokers or large PPA specialists)</TableCell>
    </TableRow>
              <TableRow className="grid grid-cols-[15%_1fr_1fr_1fr]">
                <TableCell className="bg-gray-800 text-white text-base">How it works</TableCell>
                <TableCell className="bg-primary-light/30 text-base">Use energy for free and sell excess to the grid in exchange for an annual service fee, with peace of mind through our positive value guarantee. We manage and pay for all aspects of the installation, including monitoring, maintenance, repairs and insurance.</TableCell>
                <TableCell className="text-base">Borrow money from a lender directly or via a broker to fund the installation. Manage and pay for all day-to-day monitoring, maintenance and repairs yourself.</TableCell>
                <TableCell className="text-base">Buy energy at a slightly cheaper rate than from the grid, in exchange for the PPA provider building the installation and managing it day-to-day.</TableCell>
              </TableRow>
              <TableRow className="grid grid-cols-[15%_1fr_1fr_1fr]">
                <TableCell className="bg-gray-800 text-white text-base">Who is it good for</TableCell>
                <TableCell className="bg-primary-light/30 text-base">Customers who want the benefits of solar, but prefer to focus their expertise and capital on their core activities.</TableCell>
                <TableCell className="text-base">Customers who want to own the assets within several years and manage the installation themselves.</TableCell>
                <TableCell className="text-base">Customers who want slightly cheaper energy rates and certainty of future costs, in exchange for less overall benefit.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/comparison")}
              className="hover:bg-gray-800 hover:text-white text-base"
            >
              See Full Comparison
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonPreview;
