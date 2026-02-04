import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import AnimatedLayout from "./components/AnimatedLayout";
import StickyHeader from "./components/StickyHeader";
import StickyFooter from "./components/StickyFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan Garcia",
  description: "Portfolio Website",
  icons: {
    icon: [
      {
        url: "/n-logo.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/n-logo-dark.svg",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
  openGraph: {
    title: "Nathan Garcia",
    description: "Portfolio Website",
    url: "https://www.ntns.me/",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/10f8cc86-d7d5-4f1a-97d9-13fd052b1f4a.png?token=0uCnjxNUDHz83eNyTxuvECqskQJ19_zCLmr4jPQyY5Q&height=735&width=1200&expires=33278011415",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Garcia",
    description: "Portfolio Website",
    images: [
      "https://opengraph.b-cdn.net/production/images/10f8cc86-d7d5-4f1a-97d9-13fd052b1f4a.png?token=0uCnjxNUDHz83eNyTxuvECqskQJ19_zCLmr4jPQyY5Q&height=735&width=1200&expires=33278011415",
    ],
  },
  metadataBase: new URL("https://www.ntns.me"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <StickyHeader />
        <AnimatedLayout>{children}</AnimatedLayout>
        <StickyFooter />
      </body>
    </html>
  );
}
