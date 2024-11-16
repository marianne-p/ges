/*import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from 'emailjs-com';*/
import { Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe0UnpRFummeS0BjVwyTruARq4Qx9jyqEowT6hr2iDAjXtihQ/viewform">
      <motion.section
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="section-padding bg-primary-dark cursor-pointer"
      >
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-8 text-center">
            Get a Quote
          </h2>
          <div className="flex items-center justify-center w-full text-white text-lg">
            <Sun className="h-10 w-10 mr-2" />
            Click Here to Fill Out the Form and we will get in touch with you
          </div>
        </div>
      </motion.section>
    </Link>
  );
};

export default ContactForm;

/*
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    business: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success("Thank you for your message! We'll be in touch soon.");
      setFormData({
        firstName: "",
        lastName: "",
        business: "",
        email: "",
        message: "",
      });
    }, (err) => {
      console.log('FAILED...', err);
      toast.error("Failed to send the message. Please try again later or contact us using email address below.");
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   toast.success("Thank you for your message! We'll be in touch soon.");
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     business: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-medium text-white mb-8 text-center">
          Get a Quote
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-200 mb-1">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="bg-secondary-light border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-200 mb-1">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="bg-secondary-light border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-primary"
              />
            </div>
          </div>
          <div>
            <label htmlFor="business" className="block text-sm font-medium text-gray-200 mb-1">
              Business
            </label>
            <Input
              id="business"
              name="business"
              value={formData.business}
              onChange={handleChange}
              required
              className="bg-secondary-light border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-secondary-light border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="bg-secondary-light border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-primary"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
*/
//export default ContactForm;