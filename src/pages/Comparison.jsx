import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { XIcon } from "lucide-react"; // Ensure XIcon is imported

const Comparison = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="hover:bg-primary hover:text-white"
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </div>
        <h2 className="section-title">Comparison to other options</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 text-white">
                <TableHead className="bg-gray-800 text-white text-base w-1/4"> </TableHead>
                <TableHead className="bg-gray-800 text-white text-base w-1/4">Solar service solution</TableHead>
                <TableHead className="bg-gray-800 text-white text-base w-1/4">Asset finance (lease / hire purchase)</TableHead>
                <TableHead className="bg-gray-800 text-white text-base w-1/4">PPA (power purchase agreement)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">Who is the provider</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">Green Earth Solutions</TableCell>
                <TableCell className="text-base w-1/4">Other providers (brokers or asset finance specialists)</TableCell>
                <TableCell className="text-base w-1/4">Other providers (brokers or large PPA specialists)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">How it works</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">Use energy for free and sell excess to the grid in exchange for a monthly service fee, with peace of mind through our positive value guarantee. We manage and pay for all aspects of the installation, including monitoring, maintenance, repairs and insurance.</TableCell>
                <TableCell className="text-base w-1/4">Borrow money from a lender directly or via a broker to fund the installation. Manage and pay for all day-to-day monitoring, maintenance and repairs yourself.</TableCell>
                <TableCell className="text-base w-1/4">Buy energy at a slightly cheaper rate than from the grid, in exchange for the PPA provider building the installation and managing it day-to-day.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">Who is it good for</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">Customers who want the benefits of solar, but prefer to focus their expertise and capital on their core business activities.</TableCell>
                <TableCell className="text-base w-1/4">Customers who want to own the assets within several years and manage the installation themselves.</TableCell>
                <TableCell className="text-base w-1/4">Customers who want slightly cheaper energy rates and certainty of future costs, in exchange for less overall benefit.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">Trade-offs</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">No hassle of managing the installation and certainty of positive value, in exchange for slightly lower returns.</TableCell>
                <TableCell className="text-base w-1/4">Full hassle of managing the installation in exchange for potentially slightly higher returns (depending on interest rate charged).</TableCell>
                <TableCell className="text-base w-1/4">No hassle of managing the installation and high certainty over future energy cost, in exchange for limited benefits and complex future commitments.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">Term duration</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">10-25 years</TableCell>
                <TableCell className="text-base w-1/4">Typically 5-7 years</TableCell>
                <TableCell className="text-base w-1/4">Typically 10-25 years</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">Upfront investment</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">None</TableCell>
                <TableCell className="text-base w-1/4">Typically small or none, depending on financing arrangement (no deposit usually means higher interest rates)</TableCell>
                <TableCell className="text-base w-1/4">None</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">Monitoring and maintenance responsibilities</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">Done and paid for by us</TableCell>
                <TableCell className="text-base w-1/4">Customers need to arrange and fund, in addition to any ongoing repayments</TableCell>
                <TableCell className="text-base w-1/4">Done and paid for by the PPA provider</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">Performance risk</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">Managed by us - positive value guarantee means the business always benefits</TableCell>
                <TableCell className="text-base w-1/4">All risks taken by the customer</TableCell>
                <TableCell className="text-base w-1/4">Typically shared between the customer (usage commitments) and the PPA provider (maintenance risks)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">Agreement complexity</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">Low - long term service agreement</TableCell>
                <TableCell className="text-base w-1/4">Low - standard finance agreement</TableCell>
                <TableCell className="text-base w-1/4">Very high - typically complex agreements with parallel lease agreements creating legal interest in the premises/land used by the installation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">Who owns the installation</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">We own the installation until the end of the term, with favourable early buy out options</TableCell>
                <TableCell className="text-base w-1/4">Customers own the installation, with financing secured against it (or other business assets)</TableCell>
                <TableCell className="text-base w-1/4">PPA provider owns the installation with early buy out typically expensive</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white text-base w-1/4">Tax treatment (guidance only *)</TableCell>
                <TableCell className="bg-primary-light/30 text-base w-1/4">Operating expenses may be treated as costs. May remain off-balance sheet</TableCell>
                <TableCell className="text-base w-1/4">May be treated as capital expenditure. May directly impact balance sheet</TableCell>
                <TableCell className="text-base w-1/4">No tax-deductible benefits</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;