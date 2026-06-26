import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Ashfaq Zaheer — AI-Powered Web Developer & Cloud Solutions Builder",
  description:
    "Building modern websites, AI-powered applications, and cloud-hosted solutions with rapid development workflows.",
  keywords: [
    "Ashfaq Zaheer",
    "web developer",
    "AI",
    "cloud solutions",
    "Next.js",
    "React",
    "TypeScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
  ],
  authors: [{ name: "Ashfaq Zaheer" }],
  openGraph: {
    type: "website",
    title: "Ashfaq Zaheer — AI-Powered Web Developer & Cloud Solutions Builder",
    description:
      "Building modern websites, AI-powered applications, and cloud-hosted solutions with rapid development workflows.",
    siteName: "Ashfaq Zaheer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashfaq Zaheer — AI-Powered Web Developer & Cloud Solutions Builder",
    description:
      "Building modern websites, AI-powered applications, and cloud-hosted solutions with rapid development workflows.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kanit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ashfaq Zaheer",
              jobTitle: "AI-Powered Web Developer & Cloud Solutions Builder",
              email: "Ashfaqzaheer18@gmail.com",
              url: "https://ashfaqzaheer.dev",
              sameAs: [
                "https://github.com/Ashfaqzaheer-",
                "https://www.linkedin.com/in/ashfaq-zaheer-b6b64831a/",
              ],
            }),
          }}
        />
      </head>
      <body className="font-kanit antialiased">{children}</body>
    </html>
  );
}
