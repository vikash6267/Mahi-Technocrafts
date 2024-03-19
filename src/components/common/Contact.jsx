import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { apiConnector } from "../../services/apiConnector"
import { contactusEndpoint } from "../../services/apis"
import toast from "react-hot-toast";
import { IoLogoInstagram } from "react-icons/io5";

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
    
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        {firstname,email,message}
      )
  //  console.log(res)
  if(res){
    toast.success("Contact Message Succefully Send")

  }
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    toast.error("Contact Message Cannot Send")
     
    }
    toast.dismiss(toasdID)
    try {
    
         await apiConnector(
        "POST",
        contactusEndpoint.USER_API,
        {firstname,email,message}
      )
 
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
     
    }

  }
  return (
    <div className="w-11/12 mx-auto flex gap-8 justify-between pt-20 flex-wrap-reverse">
      
      <div className="lg:w-[60%] flex flex-col">
        <div className="font-Raleway">
          <h2 className="text-white font-bold text-4xl">GET IN TOUCH</h2>
          <p className="pt-4 text-gray-300">
            Please fill out the form below to contact us and we will get back to
            you as soon as possible.
          </p>
        </div>

        <div className="pt-12">
          <form className="space-y-4 " onSubmit={submitHandle}>
            <div className="flex flex-col">
              <label htmlFor="firstname" className="text-[16px] text-white p-2">
                Your Name
              </label>
              <input
                required
                type="text"
                name="firstname"
                id="firstname"
                className="rounded-lg bg-gray-700 p-3 text-[16px] leading-[24px] text-white shadow-[0_1px_0_0] shadow-white/50 placeholder:text-blue-100 focus:outline-non"
                placeholder="Enter Your Name"
                onChange={changeHandler}
                value={formdata.firstname}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[16px] text-white p-2" htmlFor="email">
                Your Email-ID
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="rounded-lg bg-gray-700 p-3 text-[16px] leading-[24px] text-white shadow-[0_1px_0_0] shadow-white/50 placeholder:text-blue-100 focus:outline-non"
                onChange={changeHandler}
                value={formdata.email}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[16px] text-white p-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                name="message"
                required
                id="message"
                placeholder="Enter Your message"
                className="rounded-lg bg-gray-700 p-3 text-[16px] leading-[24px] text-white shadow-[0_1px_0_0] shadow-white/50 placeholder:text-blue-100 focus:outline-non"
                onChange={changeHandler}
                value={formdata.message}
              />
            </div>
            <div className=" pt-3">
              <button className=" bg-gray-300 p-3 rounded-3xl hover:bg-blue-300 transition-all border-black border-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:w-[35%]">
      <div className=" uppercase text-white font-bold text-2xl font-Raleway">Contact Info</div>
        <div className="lg:pt-14 flex flex-col gap-5 text-white text-[15x]">
       
        <div >
      <p className="flex items-center gap-1">  <MdOutlineLocationOn /> Address :-</p>
       <a href="https://maps.app.goo.gl/KQUg1hnmzbbyrn4TA"> Bhopal, Madhya Pradesh 462001</a>
        </div>


        <div >
      <p className="flex items-center gap-1">   <IoCallOutline />  Phone :-</p>
       <a className=" font-oswald" href="tel:+916267144122"> +916267144122</a>
        </div>
      
        <div >
      <p className="flex items-center gap-1">  <MdOutlineMail />  Email :-</p>
       <a className=" font-oswald" href="mailto:mahitechnocrats@gmail.com"> mahitechnocrats@gmail.com</a>
        </div>
        

        <div>
         <p className=" font-Raleway text-2xl from-neutral-600">Follow US</p>
         <a href="https://www.instagram.com/mahi_technocrafts" className="flex gap-3" target="_blank"><IoLogoInstagram  className="text-2xl text-red-700"/>@mahi_technocrafts</a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
