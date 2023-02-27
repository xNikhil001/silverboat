import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import React from "react";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <main className="mx-4">{children}</main>
      <Footer />
    </>
  );
}
