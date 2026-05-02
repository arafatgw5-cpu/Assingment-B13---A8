import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: " Generator",
  description: "Generate stunning AI images instantly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-outfit)]">
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
// 
// https://pix-gen-ai-image-generator.vercel.app/category.json