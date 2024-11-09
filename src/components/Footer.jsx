import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <p>info@greenearthsolutions.co.uk</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white mb-4">Address</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <p>Green Earth Solutions Ltd</p>
                <p>The Gallery</p>
                <p>Kings Wharf</p>
                <p>Exeter</p>
                <p>Devon</p>
                <p>EX2 4AN</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white mb-4">Company Info</h3>
            <p>Company No. 16055496, registered in England and Wales</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Green Earth Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;