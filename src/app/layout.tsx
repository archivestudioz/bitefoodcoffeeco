import type { Metadata } from "next";
import { Space_Grotesk, Caprasimo } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const caprasimo = Caprasimo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bite — Halal brunch, dinner & coffee in NJ",
  description:
    "Halal-certified all-day brunch, dinner, and coffee in Hackensack and Fair Lawn, NJ. Big flavor, big portions, big mood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${caprasimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-pink text-ink">
        {children}
      </body>
    </html>
  );
}
