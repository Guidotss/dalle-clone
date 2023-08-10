import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Toaster } from 'react-hot-toast'; 
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DALL·E",
  description: "Dalle is a simple image generation API.",
  authors: {
    name: "Guido Olguin",
  },
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.className} h-screen w-full bg-black p-10`}>
        {children}
        <Toaster 
          position="bottom-center"
          reverseOrder={false}
          />
      </body>
    </html>
  );
}
