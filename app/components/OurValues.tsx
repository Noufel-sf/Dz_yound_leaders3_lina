import React from "react";

const values = [
  {
    title: "نُمكّن الهوية",
    description:
      "ندعم الشباب للتعبير عن هويتهم السياسية والثقافية بطريقة تعكس قيم المواطنة، الاحترام، والانفتاح.",
  },
  {
    title: "نصون ثقافتنا",
    description:
      "نُؤمن أن الوعي السياسي يبدأ من فهم الثقافة الوطنية وحمايتها من التهميش، بروح مسؤولة ومستنيرة.",
  },
  {
    title: "الأصالة والاستدامة",
    description:
      "نستلهم من قيمنا الأصيلة لنصنع أثرًا مستدامًا يربط بين الحاضر والمستقبل في العمل العام.",
  },
  {
    title: "نستكشف الحقيقة",
    description:
      "نبحث عن عمق المعنى وندرب الشباب على التفكير النقدي لفهم الواقع وصناعة قرارات أكثر وعيًا.",
  },
];

export default function OurValues() {
  return (
    <section
      id="values"

      className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20"
    >
      <div className="absolute inset-0 -z-20 bg-primary" />
      <div className="absolute inset-0 -z-10 bg-primary/50 opacity-70" />

      <div className="mx-auto grid w-full max-w-7xl items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="">
          <h2 className="heading text-right text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            قيمٌ منها ننطلق
          </h2>

          <p className="mt-4 max-w-xl text-right text-xl leading-9 text-white/90 sm:text-2xl">
            بإمكانية استثنائية نبني أثرًا سياسيًا واعيًا ومستدامًا يُحدث
            التغيير.
          </p>
        </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-white/25 bg-white/95 shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur"
              >
                <div className="min-h-28 px-6 py-5 sm:min-h-32">
                  <h3 className="heading text-right text-3xl font-bold text-slate-900">
                    {value.title}
                  </h3>
                </div>

                <div className="h-px w-full bg-slate-200" />

                <div className="min-h-28 px-6 py-5 sm:min-h-32">
                  <p className="text-right text-lg leading-8 text-slate-700">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
        </div>

      </div>
    </section>
  );
}
