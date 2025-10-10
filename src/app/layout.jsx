import "./globals.css";
import NavbarMain from "@/components/core/Navbar";
import Footer from "@/components/common/Footer";
import { Toaster } from "react-hot-toast";
import Loader from "@/components/Loader";

// ✅ Default metadata (auto applies to all pages)
export const metadata = {
  title: "Mahi Technocrafts - Website Development Services in Bhopal",
  description:
    "Professional website development and internet services in Bhopal. Offering custom web solutions for businesses in Bhopal and across India.",
  keywords:
    "Bhopal website development, Bhopal web design, internet services in Bhopal, custom web solutions Bhopal, Bhopal digital marketing",
  authors: [{ name: "Mahi Technocrafts", url: "https://mahitechnocrafts.in" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://mahitechnocrafts.in",
  },
  openGraph: {
    title: "Mahi Technocrafts - Website Development Services in Bhopal",
    description:
      "Offering expert website development and internet services in Bhopal. Contact us for custom web solutions tailored to your needs.",
    url: "https://mahitechnocrafts.in",
    siteName: "Mahi Technocrafts",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahi Technocrafts - Website Development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/fav.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6857147281470902"
          crossOrigin="anonymous"
        ></script>

        {/* ✅ Schema.org JSON-LD for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mahi Technocrafts",
              description:
                "Professional website development and internet services in Bhopal. Contact us for custom web solutions tailored to businesses in Bhopal and beyond.",
              url: "https://mahitechnocrafts.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhopal",
                addressRegion: "MP",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-6267144122",
                contactType: "customer service",
              },
              logo: "/logo.png",
              image: "/og-image.png",
              sameAs: [
                "https://www.linkedin.com/company/mahi-technocrafts",
                "https://www.instagram.com/mahi_technocrafts",
              ],
            }),
          }}
        />
      </head>

      <body>
        <Loader />
        <div className="w-full">
          <NavbarMain />
          <div className="w-full fixed bg-white max-h-[70px] z-50"></div>
          {children}
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
