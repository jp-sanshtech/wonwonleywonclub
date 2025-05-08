import type { Metadata } from "next";
import { Encode_Sans_Condensed } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const encodeSansCondensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  weight: ["300"], // Light weight for ultra-minimal fashion-forward look
  variable: "--font-encode-sans-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "wonwonleywon club",
  description: "a private members club"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${encodeSansCondensed.variable} antialiased`}
      >
        <div className="container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
