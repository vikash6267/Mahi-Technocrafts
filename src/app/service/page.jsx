import Service from "@/components/Service";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="pt-[80px]  " id="service">
        <Service />
      </div>
    </div>
  );
};

export default page;

export async function generateMetadata() {
  const title = "Services - Website & Software Development | Mahi Technocrafts";
  const description = "End-to-end website development, custom software, mobile apps, and SEO services in Bhopal. Get a free consultation today.";
  const keywords = "website development services, software development, mobile app development, SEO services, Bhopal web development, web developer near me";
  return {
    title,
    description,
    keywords,
    alternates: { canonical: "/service" },
    openGraph: {
      title,
      description,
      url: "/service",
      type: "website",
      images: [
        { url: "/linkedin-image.png", alt: "Mahi Technocrafts Services" },
      ],
    },
  };
}
