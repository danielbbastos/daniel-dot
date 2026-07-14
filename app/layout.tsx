import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Daniel Bastos — frontend developer",
  description:
    "Daniel Bastos — frontend developer from Portugal, somewhere between code, design and product. Inspired by nature, looking for a small remote team with good energy.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
