import Contact from "@/components/common/Contact";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="pt-[80px]  contacts  " id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default page;

export async function generateMetadata() {
  const title = "Contact Us | Mahi Technocrafts";
  const description = "Get in touch for website development, software solutions, and SEO services in Bhopal. We’re here to help your business grow.";
  const keywords = "contact Mahi Technocrafts, website development contact, software company contact, Bhopal web developer contact";
  return {
    title,
    description,
    keywords,
    alternates: { canonical: "/contact" },
    openGraph: {
      title,
      description,
      url: "/contact",
      type: "website",
      images: [
        { url: "/linkedin-image.png", alt: "Contact Mahi Technocrafts" },
      ],
    },
  };
}
