import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const ComparisonPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="p-1 pt-6 bg-gray-50 h-screen w-screen">
      <div className="mx-auto max-h-full">
      <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="hover:bg-primary hover:text-white"
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-x-hidden w-full h-full"
        >
          <Table className="border border-gray-300">
            <TableHeader>
              <TableRow className="bg-gray-800 text-white border border-gray-300">
                <TableHead className="bg-gray-800 text-white border border-gray-300"> </TableHead>
                <TableHead className="bg-gray-800 text-white border border-gray-300">Solar service solution</TableHead>
                <TableHead className="bg-gray-800 text-white border border-gray-300">Asset finance (lease / hire purchase)</TableHead>
                <TableHead className="bg-gray-800 text-white border border-gray-300">PPA (power purchase agreement)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">Who is the provider</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">Green Earth Solutions</TableCell>
                <TableCell className="border border-gray-300">Other providers (brokers or asset finance specialists)</TableCell>
                <TableCell className="border border-gray-300">Other providers (brokers or large PPA specialists)</TableCell>
              </TableRow>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">How it works</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">Use energy for free and sell excess to the grid in exchange for a monthly service fee, with peace of mind through our positive value guarantee. We manage and pay for all aspects of the installation, including monitoring, maintenance, repairs and insurance.</TableCell>
                <TableCell className="border border-gray-300">Borrow money from a lender directly or via a broker to fund the installation. Manage and pay for all day-to-day monitoring, maintenance and repairs yourself.</TableCell>
                <TableCell className="border border-gray-300">Buy energy at a slightly cheaper rate than from the grid, in exchange for the PPA provider building the installation and managing it day-to-day.</TableCell>
              </TableRow>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">Who is it good for</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">Customers who want the benefits of solar, but prefer to focus their expertise and capital on their core business activities.</TableCell>
                <TableCell className="border border-gray-300">Customers who want to own the assets within several years and manage the installation themselves.</TableCell>
                <TableCell className="border border-gray-300">Customers who want slightly cheaper energy rates and certainty of future costs, in exchange for less overall benefit.</TableCell>
              </TableRow>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">Trade-offs</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">No hassle of managing the installation and certainty of positive value, in exchange for slightly lower returns.</TableCell>
                <TableCell className="border border-gray-300">Full hassle of managing the installation in exchange for potentially slightly higher returns (depending on interest rate charged).</TableCell>
                <TableCell className="border border-gray-300">No hassle of managing the installation and high certainty over future energy cost, in exchange for limited benefits and complex future commitments.</TableCell>
              </TableRow>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">Term duration</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">10-25 years</TableCell>
                <TableCell className="border border-gray-300">Typically 5-7 years</TableCell>
                <TableCell className="border border-gray-300">Typically 10-25 years</TableCell>
              </TableRow>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">Upfront investment</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">None</TableCell>
                <TableCell className="border border-gray-300">Typically small or none, depending on financing arrangement (no deposit usually means higher interest rates)</TableCell>
                <TableCell className="border border-gray-300">None</TableCell>
              </TableRow>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">Monitoring and maintenance responsibilities</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">Done and paid for by us</TableCell>
                <TableCell className="border border-gray-300">Customers need to arrange and fund, in addition to any ongoing repayments</TableCell>
                <TableCell className="border border-gray-300">Done and paid for by the PPA provider</TableCell>
              </TableRow>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">Performance risk</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">Managed by us - positive value guarantee means the business always benefits</TableCell>
                <TableCell className="border border-gray-300">All risks taken by the customer</TableCell>
                <TableCell className="border border-gray-300">Typically shared between the customer (usage commitments) and the PPA provider (maintenance risks)</TableCell>
              </TableRow>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">Agreement complexity</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">Low - long term service agreement</TableCell>
                <TableCell className="border border-gray-300">Low - standard finance agreement</TableCell>
                <TableCell className="border border-gray-300">Very high - typically complex agreements with parallel lease agreements creating legal interest in the premises/land used by the installation</TableCell>
              </TableRow>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">Who owns the installation</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">We own the installation until the end of the term, with favourable early buy out options</TableCell>
                <TableCell className="border border-gray-300">Customers own the installation, with financing secured against it (or other business assets)</TableCell>
                <TableCell className="border border-gray-300">PPA provider owns the installation with early buy out typically expensive</TableCell>
              </TableRow>
              <TableRow className="border border-gray-300">
                <TableCell className="bg-gray-800 text-white border border-gray-300">Tax treatment (guidance only *)</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)] border border-gray-300">Operating expenses may be treated as costs. May remain off-balance sheet</TableCell>
                <TableCell className="border border-gray-300">May be treated as capital expenditure. May directly impact balance sheet</TableCell>
                <TableCell className="border border-gray-300">No tax-deductible benefits</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonPreview;