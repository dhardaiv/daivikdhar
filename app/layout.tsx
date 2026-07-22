import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Daivik Dhar",
    template: "%s — Daivik Dhar",
  },
  description:
    "Daivik Dhar is a robotics engineering student and researcher working on reinforcement learning, multimodal agents, and adaptive ML systems.",
  keywords: [
    "Daivik Dhar",
    "robotics",
    "reinforcement learning",
    "machine learning",
    "multimodal agents",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}