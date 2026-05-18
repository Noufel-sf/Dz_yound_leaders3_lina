import Image from "next/image";

export default function Owner() {
  return (
    <section
      id="owner"
      dir="rtl"
      className="relative overflow-hidden px-4 py-16 sm:px-8 sm:py-24"
    >
      <div className="absolute inset-0 -z-20" />
      <div className="absolute right-8 top-10 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute left-8 bottom-0 -z-10 h-56 w-56 rounded-full bg-[#f5c542]/15 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <span className="h-2 w-2 heading rounded-full bg-primary" />
            صاحب المشروع
          </div>

          <h2 className="mt-5 heading text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            معلومات عن  <span className="text-primary marker-underline heading">منصر الياس</span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
           منصر إلياس شاب جزائري طموح من مدينة شلغوم العيد ولاية ميلة ، طالب جامعي و ناشط جمعوي  مهتم بالقضايا الشبابية و السياسية و الثقافية
          </p>

       
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-4xl bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/70 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-linear-to-br from-slate-100 to-slate-200">
                <Image
                  src="/owner.png"
                  alt="صورة صاحب المشروع"
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
