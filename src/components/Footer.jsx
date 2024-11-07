import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white mb-4">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <p>123 Solar Street</p>
                <p>San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <p>info@solarbenefits.com</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white mb-4">Company Info</h3>
            <p>Solar Benefits Unlocked LLC</p>
            <p>Registration #: SB12345678</p>
            <p>Licensed and Insured</p>
            <p>California Contractor License #: 987654</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Solar Benefits Unlocked. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;