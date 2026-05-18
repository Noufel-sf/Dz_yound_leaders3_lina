import React from 'react'
import { Check } from "lucide-react";

 const highlights = [
    {
      title: "تأهيل شامل",
      description:
        "برنامج متكامل يغطي المسارات المهارية والقانونية والإدارية والسياسية.",
    },
    {
      title: "قيادة واعية",
      description:
        "نعد جيلاً قادراً على فهم الحياة العامة والمشاركة الفعالة فيها.",
    },
    {
      title: "هوية قوية",
      description:
        "نحافظ على التراث الثقافي ونطوره ليكون منطلقاً للتغيير الإيجابي.",
    },
    {
      title: "شراكات استراتيجية",
      description:
        "دعم من وزارة الشباب والمجلس الأعلى للشباب ضمن برنامج DZ Young Leaders.",
    },
  ];

function WhyChooseUs() {
  return (
     <section className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading mb-16 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
            ما الذي{" "}
            <span className="heading  marker-underline text-primary">
              يميزنا
            </span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-2.5">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="heading mb-3 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

  )
}

export default WhyChooseUs