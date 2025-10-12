import React from "react";
import Home from "./Home";

const page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  const keywords = `Mahi Technocrafts, Software Development Company, Custom Software Development, Web Development, Mobile App Development, MERN stack development, React development, Node.js development, API development, scalable applications, UI/UX design, enterprise software, technology solutions, modern web technologies, full stack services`;

  const schemaMarkup = {
    "@context": "https://schema.org/",
    "@type": "SoftwareApplication",
    name: "Mahi Technocrafts - Software Development",
    image: "https://i.ibb.co/TKZM1Q2/mainlogo.png",

    description:
      "Mahi Technocrafts is a software development company specializing in creating custom software solutions for businesses.",
    brand: "Mahi Technocrafts",
    offers: {
      "@type": "Offer",
      url: `https://www.mahitechnocrafts.in`,
      priceCurrency: "INR",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  };

  return {
    title: "Mahi Technocrafts - Software Development Company",
    description:
      "Mahi Technocrafts specializes in building custom software solutions, web development, and mobile app development for clients.",
    keywords: keywords,
    icons: {
      image: "https://i.ibb.co/TKZM1Q2/mainlogo.png",
    },
    openGraph: {
      title: `Mahi Technocrafts - Software Development Company`,
      description: `Mahi Technocrafts offers end-to-end software development services, including web and mobile applications, API development, and UI/UX design.`,
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
