import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const ComparisonPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Compare Our Solutions</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
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
              <TableRow>
                <TableCell>System Size</TableCell>
                <TableCell>Up to 10kW</TableCell>
                <TableCell>Up to 50kW</TableCell>
                <TableCell>Custom</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Monitoring</TableCell>
                <TableCell>Basic</TableCell>
                <TableCell>Advanced</TableCell>
                <TableCell>Premium</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/comparison")}
              className="hover:bg-primary hover:text-white"
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