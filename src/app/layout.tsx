import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Ammannaidu - Backend Engineer | Java Spring Boot Expert",
  description:
    "Experienced Backend Software Engineer specializing in Java, Spring Boot, Microservices, and Cloud Architecture. 4+ years building scalable distributed systems at Infosys for BNSF Railways & Mercedes-Benz. AWS & Azure certified.",
  keywords:
    "Java Developer, Spring Boot Engineer, Microservices Architect, Backend Developer, Software Engineer, REST API, AWS, Azure, MySQL, React Developer, Full Stack Engineer, Infosys Engineer, BNSF Railways, Mercedes-Benz",
  authors: [{ name: "Ammannaidu" }],
  creator: "Ammannaidu",
  publisher: "Ammannaidu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.ammannaidu.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Ammannaidu - Senior Backend Engineer | Java Spring Boot Microservices Expert",
    description:
      "Senior Systems Engineer around 4 years experience in Java, Spring Boot, Microservices. Built 40+ REST APIs, migrated 25+ legacy systems. AWS & Azure certified. Portfolio & Projects.",
    url: "https://www.ammannaidu.dev",
    siteName: "Ammannaidu",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ammannaidu - Backend Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammannaidu - Senior Backend Engineer | Java Spring Boot Expert",
    description:
      "Senior Systems Engineer specializing in Java, Spring Boot, Microservices, and Cloud Architecture. 4+ years experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add after setting up Google Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="canonical" href="https://www.ammannaidu.dev" />

        {/* Custom AG Logo */}
        <link rel="icon" type="image/svg+xml" href="/ag-logo.svg" />

        {/* Structured Data - JSON-LD for better Google understanding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ammannaidu",
              jobTitle: "Senior Systems Engineer",
              description:
                "Backend Software Engineer with 4+ years experience in Java, Spring Boot, Microservices",
              url: "https://yourwebsite.com",
              sameAs: [
                "https://github.com/Ammannaidu-228",
                "https://www.linkedin.com/in/ammannaidu-gollapalli-4591a639b",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Indian Institute of Information Technology, Nuzvid",
              },
              worksFor: {
                "@type": "Organization",
                name: "Infosys",
              },
              knowsAbout: [
                "Java",
                "Spring Boot",
                "Microservices",
                "REST API",
                "MySQL",
                "AWS",
                "Azure",
                "React.js",
                "Docker",
                "Kubernetes",
              ],
            }),
          }}
        />
      </head>

      <body>
        <Navbar />
        <ThemeProvider>
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
