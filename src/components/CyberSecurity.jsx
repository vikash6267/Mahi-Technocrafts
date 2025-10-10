"use client";
import React, { useState } from "react";
import { FaUser, FaPhoneAlt, FaRegCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const CyberConsultancyPage = () => {
  const [isHindi, setIsHindi] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    reason: "",
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

    emailjs
      .sendForm(
        "service_k8jbvhw",
        "template_smiuh85",
        e.target,
        "E7wzm9rXksm6PR5aS"
      )
      .then(
        (result) => {
          toast.success("Contact Message Successfully Sent");
          toast.dismiss(toasdID);
          setFormData({
            name: "",
            contact: "",
            reason: "",
          });
        },
        (error) => {
          toast.error("Technical Error. Contact Us via Phone Number & Email");
          toast.dismiss(toasdID);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="overflow-x-hidden bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-2xl p-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {isHindi ? "साइबर कंसल्टेंसी सेवाएं" : "Cyber Consultancy Services"}
          </h1>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={toggleLanguage}
          >
            {isHindi ? "Switch to English" : "हिंदी में अनुवाद करें"}
          </button>
        </motion.div>

        <motion.section
          className="bg-white p-8 shadow-lg rounded-lg mb-12"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {isHindi ? (
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center">
                साइबर केस के लिए अपॉइंटमेंट फॉर्म
              </h2>
              <p className="mb-4 text-gray-700 text-center">
                साइबर मामलों के लिए अपॉइंटमेंट बुकिंग नीचे उपलब्ध है। कृपया अपने
                विवरण भरें और हम जल्द ही आपसे संपर्क करेंगे।
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center">
                Appointment Form for Cyber Cases
              </h2>
              <p className="mb-4 text-gray-700 text-center">
                The appointment booking form for cyber cases is available below.
                Please fill in your details, and we will contact you shortly.
              </p>
            </div>
          )}
        </motion.section>

        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg mx-auto overflow-auto"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
            {isHindi ? "अपॉइंटमेंट बुकिंग फॉर्म" : "Appointment Booking Form"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaUser className="text-blue-600 text-2xl" />
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2 text-center"
                >
                  {isHindi ? "पूरा नाम" : "Full Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={
                    isHindi ? "अपना पूरा नाम दर्ज करें" : "Enter your full name"
                  }
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <div className="w-full">
                <label
                  htmlFor="contact"
                  className="block text-gray-700 font-medium mb-2 text-center"
                >
                  {isHindi ? "संपर्क नंबर" : "Contact Number"}
                </label>
                <input
                  type="tel"
                  name="contact"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder={
                    isHindi
                      ? "अपना संपर्क नंबर दर्ज करें"
                      : "Enter your contact number"
                  }
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <FaRegCommentDots className="text-blue-600 text-2xl" />
              <div className="w-full">
                <label
                  htmlFor="reason"
                  className="block text-gray-700 font-medium mb-2 text-center"
                >
                  {isHindi ? "कारण" : "Reason"}
                </label>
                <textarea
                  name="reason"
                  id="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder={
                    isHindi ? "अपना कारण यहाँ लिखें" : "Enter the reason here"
                  }
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {isHindi ? "फॉर्म सबमिट करें" : "Submit Form"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CyberConsultancyPage;
