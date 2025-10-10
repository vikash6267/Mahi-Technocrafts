import AboutUs from "@/components/common/AboutUs";
import Contact from "@/components/common/Contact";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="" id="about">
        <AboutUs />
      </div>{" "}
      *
      <div className="pt-[60px]  contacts  " id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default page;

export async function generateMetadata() {
  const keywords = `About Mahi Technocrafts, Software Development Company, Custom Software Solutions, Web Development, Mobile App Development, Full Stack Services, MERN Stack Development, Enterprise Software, Technology Solutions, Modern Web Technologies`;

  const schemaMarkup = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    name: "Mahi Technocrafts",
    url: "https://www.mahitechnocrafts.in",
    logo: "https://i.ibb.co/TKZM1Q2/mainlogo.png",
    description:
      "Mahi Technocrafts is a leading software development company dedicated to empowering businesses with innovative and custom technology solutions.",
    sameAs: [
      "https://www.linkedin.com/company/mahi-technocrafts",
      "https://www.instagram.com/mahi_technocrafts",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+916267144122",
      contactType: "Customer Support",
      areaServed: "Global",
    },
  };

  return {
    title: "About Us - Mahi Technocrafts",
    description:
      "Learn more about Mahi Technocrafts, a software development company that delivers innovative web, mobile, and enterprise solutions to help businesses succeed.",
    keywords: keywords,
    icons: {
      image: "https://i.ibb.co/TKZM1Q2/mainlogo.png",
    },
    openGraph: {
      title: `About Us - Mahi Technocrafts`,
      description: `Discover the story and mission of Mahi Technocrafts, a trusted partner in software development, dedicated to creating scalable and modern solutions for businesses worldwide.`,
      images: [
        {
          url: "https://i.ibb.co/TKZM1Q2/mainlogo.png",
          alt: "Mahi Technocrafts Logo",
        },
      ],
    },
    schemaMarkup: JSON.stringify(schemaMarkup),
  };
}
