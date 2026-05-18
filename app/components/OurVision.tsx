import Image from "next/image";

export default function OurVision() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden  px-4 py-20 sm:px-8 lg:px-12"
    >
      {/* subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* large faded heading behind content */}

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16">
        {/* ── Text column ─────────────────────────────────── */}
        <div className="flex flex-1 flex-col justify-center text-right">
          {/* badge */}
          <div className="">
            <Image
              src="/img.svg"
              alt="فريق انطلاقتك"
              width={78}
              height={78}
            />
          </div>

          {/* headline */}
          <h2 className="mt-5 heading text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
            لماذا هذا{" "}
            <span className="relative text-primary heading marker-underline">
              البرنامج
            </span>{" "}
            مهم؟
          </h2>

          {/* body */}
          <p className="mt-5 max-w-xl text-lg leading-9 text-slate-500">
            نسعى إلى تقليص الفجوة بين الشباب والمجالس المنتخبة عبر تكوين عملي
            يرفع الوعي السياسي ويمنح المشاركين أدوات حقيقية لفهم الشأن العام
            والمساهمة فيه.
          </p>

          {/* divider */}
          <div className="my-8 h-px w-24 bg-primary/20 mr-auto" />

          {/* mission + vision cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 transition-all duration-200 hover:border-primary/35">
              <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-full" />

              <h3 className="heading text-lg font-extrabold text-slate-900">
                رؤية واضحة
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                إعداد جيل واعٍ وقادر على المشاركة الفعالة في الحياة السياسية
                وصناعة القرار
              </p>
            </article>
          </div>
        </div>

        {/* ── Image column ─────────────────────────────────── */}
        <div className="relative w-full max-w-sm shrink-0 sm:max-w-md lg:max-w-[26rem]">
          {/* decorative frame behind image */}
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl border-2 border-primary/15" />

          {/* image container */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/60">
            <Image
              src="/h.jpg"
              alt="لماذا هذا البرنامج مهم"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* small accent dot grid */}
          <div
            className="absolute -right-6 -top-6 -z-10 h-24 w-24 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 2px, transparent 2px)",
              backgroundSize: "8px 8px",
              color: "var(--color-primary, #2563eb)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
