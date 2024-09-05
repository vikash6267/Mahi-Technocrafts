import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaUser, FaPhoneAlt, FaRegCommentDots, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';  // Import emailjs
import toast from "react-hot-toast";
import Navbar from './core/Navbar';

const CyberConsultancyPage = () => {
  const [isHindi, setIsHindi] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    reason: '',
  });

  const toggleLanguage = () => {
    setIsHindi(!isHindi);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const toasdID = toast.loading("loading");

    // Send email using EmailJS
    emailjs.sendForm('service_k8jbvhw', 'template_smiuh85', e.target, 'E7wzm9rXksm6PR5aS')
      .then((result) => {
        toast.success("Contact Message Successfully Sent");
        toast.dismiss(toasdID);

        // Clear form data
        setFormData({
          name: '',
          contact: '',
          reason: '',
        });
      }, (error) => {
        toast.error("Technical Error. Contact Us via Phone Number & Email");
        toast.dismiss(toasdID);
        console.log(error.text);
      });
  };

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-2xl p-8">
        <Helmet>
          <title>
            {isHindi
              ? 'साइबर कंसल्टेंसी सेवाएं | Mahi Technocrafts | साइबर सुरक्षा और डेटा गोपनीयता'
              : 'Cyber Consultancy Services | Mahi Technocrafts | Cybersecurity and Data Privacy'}
          </title>
          <meta
            name="description"
            content={
              isHindi
                ? 'Mahi Technocrafts द्वारा पेश की जाने वाली साइबर कंसल्टेंसी सेवाओं की जानकारी प्राप्त करें। हमारी सेवाओं में साइबर सुरक्षा, हैक रिकवरी, डेटा गोपनीयता, और अधिक शामिल हैं। सुरक्षित और कुशल समाधान के लिए हमसे संपर्क करें।'
                : 'Learn about the comprehensive cyber consultancy services offered by Mahi Technocrafts. Our services include cybersecurity, hack recovery, data privacy, and more. Contact us for secure and efficient solutions.'
            }
          />
          <meta
            name="keywords"
            content={
              isHindi
                ? 'साइबर कंसल्टेंसी, साइबर सुरक्षा, डेटा गोपनीयता, हैक रिकवरी, Mahi Technocrafts, साइबर सेवाएं'
                : 'cyber consultancy, cybersecurity, data privacy, hack recovery, Mahi Technocrafts, cyber services'
            }
          />
          <meta
            name="robots"
            content="index, follow"
          />
          <meta
            property="og:title"
            content={
              isHindi
                ? 'साइबर कंसल्टेंसी सेवाएं | Mahi Technocrafts'
                : 'Cyber Consultancy Services | Mahi Technocrafts'
            }
          />
          <meta
            property="og:description"
            content={
              isHindi
                ? 'Mahi Technocrafts द्वारा पेश की जाने वाली साइबर कंसल्टेंसी सेवाओं की जानकारी प्राप्त करें। हमारी सेवाओं में साइबर सुरक्षा, हैक रिकवरी, डेटा गोपनीयता, और अधिक शामिल हैं। सुरक्षित और कुशल समाधान के लिए हमसे संपर्क करें।'
                : 'Learn about the comprehensive cyber consultancy services offered by Mahi Technocrafts. Our services include cybersecurity, hack recovery, data privacy, and more. Contact us for secure and efficient solutions.'
            }
          />
          <meta
            property="og:url"
            content="https://www.mahitechnocrafts.in/cyber-security" // Replace with the actual URL of your page
          />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Cyber Consultancy",
                "provider": {
                  "@type": "Organization",
                  "name": "Mahi Technocrafts",
                  "url": "https://www.mahitechnocrafts.in",
                  "logo": "https://www.mahitechnocrafts.in/logo.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-6267144122",
                    "contactType": "customer service",
                    "email": "support@mahitechnocrafts.in"
                  }
                },
                "offers": {
                  "@type": "Offer",
                  "name": "Cybersecurity Services",
                  "priceCurrency": "INR",
                  "price": "Contact for details",
                  "description": "Comprehensive cyber consultancy services including cybersecurity, hack recovery, data privacy, and more."
                },
                "description": "Expert cyber consultancy services by Mahi Technocrafts, offering solutions for cybersecurity, hack recovery, data privacy, and more."
              }
            `}
          </script>
        </Helmet>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {isHindi ? 'साइबर कंसल्टेंसी सेवाएं' : 'Cyber Consultancy Services'}
          </h1>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={toggleLanguage}
          >
            {isHindi ? 'Switch to English' : 'हिंदी में अनुवाद करें'}
          </button>
        </motion.div>

        {/* Updated Cyber Consultancy Section */}
        <motion.section
          className="bg-white p-8 shadow-lg rounded-lg mb-12 mx-auto"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {isHindi ? (
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center">साइबर केस के लिए अपॉइंटमेंट फॉर्म</h2>
              <p className="mb-4 text-gray-700 text-center">
                साइबर मामलों के लिए अपॉइंटमेंट बुकिंग नीचे उपलब्ध है। कृपया अपने विवरण भरें और हम जल्द ही आपसे संपर्क करेंगे।
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center">Appointment Form for Cyber Cases</h2>
              <p className="mb-4 text-gray-700 text-center">
                The appointment booking form for cyber cases is available below. Please fill in your details, and we will contact you shortly.
              </p>
            </div>
          )}
        </motion.section>

        {/* Updated Form Section */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg mx-auto"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
            {isHindi ? 'अपॉइंटमेंट बुकिंग फॉर्म' : 'Appointment Booking Form'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Input */}
            <motion.div className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaUser className="text-blue-600 text-2xl" />
              <div className="w-full">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-center">
                  {isHindi ? 'पूरा नाम' : 'Full Name'}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={isHindi ? 'अपना पूरा नाम दर्ज करें' : 'Enter your full name'}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </motion.div>

            {/* Contact Number Input */}
            <motion.div className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <div className="w-full">
                <label htmlFor="contact" className="block text-gray-700 font-medium mb-2 text-center">
                  {isHindi ? 'संपर्क नंबर' : 'Contact Number'}
                </label>
                <input
                  type="tel"
                  name="contact"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder={isHindi ? 'अपना संपर्क नंबर दर्ज करें' : 'Enter your contact number'}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </motion.div>

            {/* Reason Input */}
            <motion.div className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <FaRegCommentDots className="text-blue-600 text-2xl" />
              <div className="w-full">
                <label htmlFor="reason" className="block text-gray-700 font-medium mb-2 text-center">
                  {isHindi ? 'कारण' : 'Reason for Contact'}
                </label>
                <textarea
                  name="reason"
                  id="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder={isHindi ? 'संपर्क का कारण दर्ज करें' : 'Enter the reason for contact'}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {isHindi ? 'सबमिट करें' : 'Submit'}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default CyberConsultancyPage;
