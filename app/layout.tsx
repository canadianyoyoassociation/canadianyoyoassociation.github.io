import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import "@/app/globals.css";
import CanyaFooter from "@/components/CanyaFooter";
import CanyaNavbar from "@/components/CanyaNavbar";
import CanyaBanner from "@/components/CanyaBanner";

export const metadata: Metadata = {
  title: {
    template: "%s - Canadian Nationals 2026",
    default: "Canadian Nationals 2026: May 17 in Calgary",
  },
  description: "Canadian National Return Top Championship 2026",
  keywords: [
    "yo-yo",
    "yoyo",
    "yoyos",
    "calgary",
    "yoyoing",
    "canada",
    "alberta",
    "return top",
    "return",
    "top",
    "competition",
    "championship",
    "contest",
    "national",
    "nats",
    "nationals",
  ],
  openGraph: {
    title: "Canadian Nationals 2026: May 17 in Calgary",
    description: "Canadian National Return Top Championship 2026",
    url: `https://${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_BASE_PATH}`,
    siteName: "Canadian Nationals 2026",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_BASE_PATH}/assets/FBpreview.jpg`,
        alt: "Canadian Nationals 2026",
        width: 600,
        height: 315,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Nationals 2026: May 17 in Calgary",
    description: "Canadian National Return Top Championship 2026",
    images: [
      `https://${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_BASE_PATH}/assets/FBpreview.jpg`,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="light">
      <GoogleTagManager gtmId="GTM-MJZ4QWRJ" />
      <body>
        <CanyaNavbar />
        <CanyaBanner />
        <Container id="main" className="my-5 pb-2">
          {children}
        </Container>
        <CanyaFooter />
      </body>
    </html>
  );
}
