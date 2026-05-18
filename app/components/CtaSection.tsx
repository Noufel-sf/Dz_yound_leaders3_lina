import React from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

function CtaSection() {
  return (
    <section className="px-4 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden bg-black/30 shadow-2xl">
          {/* subtle background image inside the card */}
          <Image
            src="/hero.jpg"
            alt="hero bg"
            fill
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative px-6 py-12 sm:px-12 sm:py-16">
            <div className="text-right">
              <div className="flex justify-end">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary heading" />
                  عروض حصرية لمشتركينا
                </div>
              </div>

              <h2 className="heading mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
                اشترك الآن واحصل على <span className="text-primary heading">عروض حصرية</span>
                <br /> لاستكشاف خبايا الوطن العربي
              </h2>

              <p className="mt-4 max-w-xl text-sm text-white/80">
                كن أول من يعرف أفضل الصفقات والباقات الجديدة. أكثر من 50,000 مسافر سعيد يتلقون عروضنا الأسبوعية.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-105">
                  اشترك الآن
                </button>

                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">بريدك الإلكتروني</label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      className="w-full rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/60 focus:outline-none"
                    />
                    <div className="absolute inset-y-0 left-4 flex items-center text-white/60 text-xs">لن نشارك بريدك</div>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs text-white/50">لن نشارك بريدك الإلكتروني مع أي طرف ثالث. يمكنك إلغاء الاشتراك في أي وقت.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
