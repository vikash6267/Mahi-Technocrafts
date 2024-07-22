import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { apiConnector } from "../../services/apiConnector"
import { contactusEndpoint } from "../../services/apis"
import toast from "react-hot-toast";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


function Contact() {
  const [formdata, setFormData] = useState({
    firstname: "",
    email: "",
    message: "",
  });
  function changeHandler(event) {
    setFormData((prevState) => {
      return {
        ...prevState, // copy old input field data
        [event.target.name]: event.target.value,
      };
    });
  }

const{firstname,email,message} = formdata;
  const submitHandle = async(event) =>{
    event.preventDefault();
    // console.log(formdata);
const toasdID = toast.loading("loading")



try {
    
 const response =  await apiConnector(
 "POST",
 contactusEndpoint.USER_API,
 {firstname,email,message}
)

  if(response){
    toast.success("Contact Message Succefully Send")

  }

} catch (error) {
console.log("ERROR MESSAGE - ", error.message)

}
toast.dismiss(toasdID)





    try {
    
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        {firstname,email,message}
      )
  //  console.log(res)
  // if(res){
  //   toast.success("Contact Message Succefully Send")

  // }
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    // toast.error("Contact Message Cannot Send")
     
    }


  }
  return (
    <div className="flex gap-8 justify-between  flex-wrap-reverse bg-gray-900 bg-opacity-90 p-8  shadow-lg">

    <div className="lg:w-[60%] flex flex-col">
      <div className="font-Raleway">
        <h4 className="text-white font-bold lg:text-4xl text-2xl mb-4">GET IN TOUCH</h4>
        <p className="text-gray-300 mb-8 text-[12px] lg:text-base">
          Please fill out the form below to contact us and we will get back to you as soon as possible.
        </p>
      </div>

      <div>
        <form className="lg:space-y-6" onSubmit={submitHandle}>
          <div className="flex flex-col">
            <label htmlFor="firstname" className="lg:lg:text-[16px] text-[14px] text-[14px] text-white mb-2">Your Name</label>
            <input
              required
              type="text"
              name="firstname"
              id="firstname"
              className="rounded-lg bg-gray-700 lg:p-4 p-2 lg:text-[16px] text-[14px]  leading-[24px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Name"
              onChange={changeHandler}
              value={formdata.firstname}
            />
          </div>

          <div className="flex flex-col">
            <label className="lg:text-[16px] text-[14px] text-white mb-2" htmlFor="email">Your Email-ID</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="rounded-lg bg-gray-700 p-2 lg:text-[16px] text-[14px] leading-[24px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={changeHandler}
              value={formdata.email}
            />
          </div>

          <div className="flex flex-col">
            <label className="lg:text-[16px] text-[14px] text-white mb-2" htmlFor="message">Your Message</label>
            <textarea
              name="message"
              required
              id="message"
              
              placeholder="Enter Your message"
              className="rounded-lg bg-gray-700 lg:p-4 p-2 lg:h-32 lg:text-[16px] text-[14px] leading-[24px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={changeHandler}
              value={formdata.message}
            />
          </div>
          <div className="pt-3">
            <button className="w-full bg-gray-400 p-3 lg:ext-xl rounded-lg text-black font-semibold hover:bg-transparent hover:text-white hover:border-2 border-white hover:scale-95 transition-all">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>

    <div className="lg:w-[35%] flex flex-col gap-8 ">
      <div className="uppercase text-white font-bold lg:text-2xl text-xl font-Raleway mb-4">Contact Info</div>
      <div className="flex flex-col gap-5 text-white text-[15px]">
   

  
   <div>
          <p className="flex items-center gap-2"><MdOutlineLocationOn className="lg:text-2xl text-[12px]" /> Address :</p>
          <a href="https://maps.app.goo.gl/WrnEEvHzNrGxyknn7" className="text-blue-400 hover:underline text-[12px]">Mahi Technocrafts, Hamidia Road, Bhopal, Madhya Pradesh 462001</a>
        </div>

        <div>
          <p className="flex items-center gap-2"><IoCallOutline className="lg:text-2xl text-[12px]" /> Phone :</p>
          <a className="font-oswald text-blue-400 hover:underline text-[12px] leading-3 " href="tel:+916267144122">+916267144122</a>
        </div>
   

        <div>
          <p className="flex items-center gap-2"><MdOutlineMail className="lg:text-2xl text-[12px]" /> Email :</p>
          <a className="font-oswald text-blue-400 hover:underline text-[12px]" href="mailto:support@mahitechnocrafts.in">support@mahitechnocrafts.in</a>
        </div>
 
        <div className="text-[12px]">
          <p className="font-Raleway text-2xl text-neutral-400 mb-2">Follow Us</p>
          <a href="https://linkedin.com/company/mahi-technocrafts" className="text-blue-400 hover:underline flex  items-center gap-3 mt-1" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="text-xl" /> Mahi Technocrafts</a>
          <a href="https://www.instagram.com/mahi_technocrafts" className="flex items-center gap-3 text-red-500 hover:underline mt-3" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram className="text-xl" /> @mahi_technocrafts
          </a>
         
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contact;
