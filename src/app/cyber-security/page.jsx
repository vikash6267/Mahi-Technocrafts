import CyberConsultancyPage from "@/components/CyberSecurity";
import React from "react";

const page = () => {
  return (
    <div>
      <CyberConsultancyPage />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  const title = "Cyber Security Consultancy | Mahi Technocrafts";
  const description = "Get expert Cyber Security assessment, implementation and audits for SMBs in Bhopal. Protect your applications and infrastructure.";
  const keywords = "cyber security consultancy, security assessment, penetration testing, vulnerability management, Bhopal cyber security";
  return {
    title,
    description,
    keywords,
    alternates: { canonical: "/cyber-security" },
    openGraph: {
      title,
      description,
      url: "/cyber-security",
      type: "website",
      images: [
        { url: "/linkedin-image.png", alt: "Cyber Security Consultancy" },
      ],
    },
  };
}
