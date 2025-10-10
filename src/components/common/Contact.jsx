"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { apiConnector } from "../../services/apiConnector";
import { contactusEndpoint } from "../../services/apis";
import Link from "next/link";

// Dynamic imports (kept as is)
const MdOutlineLocationOn = dynamic(() =>
  import("react-icons/md").then((mod) => mod.MdOutlineLocationOn)
);
const IoCallOutline = dynamic(() =>
  import("react-icons/io5").then((mod) => mod.IoCallOutline)
);
const MdOutlineMail = dynamic(() =>
  import("react-icons/md").then((mod) => mod.MdOutlineMail)
);
const IoLogoInstagram = dynamic(() =>
  import("react-icons/io5").then((mod) => mod.IoLogoInstagram)
);
const FaLinkedin = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaLinkedin)
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    message: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandle = async (event) => {
    event.preventDefault();
    const toastID = toast.loading("Sending message...");
    const { firstname, email, message } = formData;

    try {
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        {
          firstname,
          email,
          message,
        }
      );
      if (response) {
        toast.success("Message sent successfully!", { id: toastID });
        setFormData({ firstname: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending message:", error.message);
      toast.error("Failed to send message.", { id: toastID });
    }
  };

  return (
    // 1. Outer Wrapper: Full Screen Width (w-screen) and Centering
    // Removed bg-gray-100 here to let the inner content background dominate
    <div className="w-screen flex bg-gray-800 justify-center items-center py-10 sm:py-16 min-h-screen">
      {/* 2. Inner Content Wrapper: Max-Width 7xl and Centering */}
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Main Contact Section: Background (bg-gray-800) will be limited to max-w-7xl content block */}
        <div className="flex gap-8 justify-between flex-wrap-reverse  p-8 sm:p-12 md:p-16 rounded-xl shadow-2xl">
          {/* Contact Form Section */}
          <div className="lg:w-[60%] w-full flex flex-col">
            <div className="font-Raleway">
              <h4 className="text-white font-bold text-3xl md:text-4xl mb-4">
                GET IN TOUCH
              </h4>
              <p className="text-gray-300 mb-8 text-sm md:text-base">
                Please fill out the form below to contact us and we will get
                back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-4 md:space-y-6" onSubmit={submitHandle}>
              {/* Name Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="firstname"
                  className="text-sm md:text-base text-white mb-2"
                >
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="rounded-lg bg-gray-700 p-3 text-sm md:text-base leading-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="Enter Your Name"
                  onChange={changeHandler}
                  value={formData.firstname}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm md:text-base text-white mb-2"
                >
                  Your Email-ID
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="rounded-lg bg-gray-700 p-3 text-sm md:text-base leading-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  onChange={changeHandler}
                  value={formData.email}
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm md:text-base text-white mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  id="message"
                  placeholder="Enter Your Message"
                  rows={4} // Set a fixed number of rows
                  className="rounded-lg bg-gray-700 p-3 h-auto text-sm md:text-base leading-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  onChange={changeHandler}
                  value={formData.message}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 p-3 text-base md:text-lg rounded-lg text-white font-semibold hover:bg-blue-700 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="lg:w-[35%] w-full flex flex-col gap-8 p-6 bg-gray-900 rounded-xl">
            <div className="uppercase text-white font-bold text-xl md:text-2xl font-Raleway mb-2 border-b border-blue-500 pb-2">
              Contact Info
            </div>

            <div className="flex flex-col gap-6 text-gray-300 text-sm md:text-base">
              {/* Address */}
              <div className="flex gap-4">
                <MdOutlineLocationOn className="text-blue-400 text-3xl flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Address:</p>
                  <Link
                    href="https://maps.app.goo.gl/YourMapLinkHere"
                    className="hover:text-blue-400 text-sm md:text-[15px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mahi Technocrafts, Hamidia Road, Bhopal, Madhya Pradesh
                    462001
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <IoCallOutline className="text-blue-400 text-3xl flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Phone:</p>
                  <a
                    href="tel:+916267144122"
                    className="hover:text-blue-400 text-sm md:text-[15px]"
                  >
                    +91 6267144122
                  </a>
                  <span className="mx-2">||</span>
                  <a
                    href="tel:+919009594537"
                    className="hover:text-blue-400 text-sm md:text-[15px]"
                  >
                    +91 9009594537
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <MdOutlineMail className="text-blue-400 text-3xl flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email:</p>
                  <a
                    href="mailto:support@mahitechnocrafts.in"
                    className="hover:text-blue-400 text-sm md:text-[15px]"
                  >
                    support@mahitechnocrafts.in
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-gray-700">
                <p className="font-Raleway text-xl font-semibold text-white mb-3">
                  Follow Us
                </p>
                <div className="flex gap-4 text-3xl">
                  <Link
                    href="https://linkedin.com/company/mahi-technocrafts"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    href="https://www.instagram.com/mahi_technocrafts"
                    className="text-pink-500 hover:text-pink-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <IoLogoInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
