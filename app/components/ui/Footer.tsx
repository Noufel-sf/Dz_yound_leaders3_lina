import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div
      className="relative h-[430px] bg-primary"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+430px)] -top-[100vh]">
        <footer className="h-[430px] py-12 sticky top-[calc(100vh-430px)] bg-primary">
          <div className="absolute inset-0 bg-primary -z-10" />

          <div className="w-full relative z-10 px-8 md:px-16">
            <h1 className="text-[6rem] md:text-[10rem] text-white text-center mb-12 heading  font-bold">
              مشروع انطلاقتك
            </h1>
            <div
              className="flex flex-col z-10 md:flex-row justify-between items-center gap-6 text-sm"
              dir="rtl"
            >
              {/* Left: Copyright */}
              <span className="">© 2026 mawada.dz</span>

              {/* Center: Links */}
              <div className="flex gap-6 flex-row-reverse">
                <Link
                  href="/about"
                  className=" hover:text-white transition-colors"
                >
                  من نحن 
                </Link>
                <span className="">•</span>
                <Link
                  href="/contact"
                  className=" hover:text-white transition-colors"
                >
                  تواصل معنا
                </Link>
              </div>

              {/* Right: Site name & description */}
              <div className="">
                <span>مشروع انطلاقتك</span>
                <span className="mx-2">•</span>
                <span>DZ Young Leaders</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
