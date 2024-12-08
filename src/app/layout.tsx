import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "math_calculator",
  description: "Created by Ruchira Madushan",
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The root layout of the application.
 *
 * This component is responsible for rendering the HTML `body` element and
 * applying the global CSS styles.
 *
 * @param children - The children elements of the layout.
 * @returns The root layout of the application.
 * @example
 * 
/******  673b9799-5030-4b4d-9339-17ae4a265f34  *******/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
