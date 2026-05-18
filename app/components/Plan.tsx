import React from "react";

function Plan() {
  return (
    <section
      id="sustainability"
      dir="rtl"
      className="w-full px-4 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl rounded-3xl p-8 shadow-sm sm:p-12">
        <div className="mb-8 text-center">
          <p className="heading mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            استدامة المشروع
          </p>
          <h2 className="heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            نضمن{" "}
            <span className="heading marker-underline text-primary">
              استمرارية الأثر
            </span>{" "}
            عبر الشباب
          </h2>
        </div>

        <p className="mx-auto max-w-4xl text-center text-base leading-8 text-slate-700 sm:text-lg">
          يتم ضمان استدامة المشروع عبر إنشاء مجلس استشاري شبابي يضم نخبة
          المشاركين، يتيح لهم المشاركة الفعلية في مناقشة القضايا العامة وصياغة
          توصيات تنقل إلى الجهات المعنية، مما يعزز انخراطهم المستمر ودورهم في
          الإسهام في صناعة الرأي.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5 text-center">
            <h3 className="heading text-lg font-bold text-primary">
              مشاركة فعلية
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              إشراك الأعضاء في نقاشات القضايا العامة بشكل منتظم ومنظم.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5 text-center">
            <h3 className="heading text-lg font-bold text-primary">
              توصيات مؤثرة
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              تحويل النقاشات إلى مخرجات عملية قابلة للرفع إلى الجهات المعنية.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5 text-center">
            <h3 className="heading text-lg font-bold text-primary">
              دور مستدام
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              تعزيز انخراط الشباب على المدى البعيد في الإسهام بصناعة الرأي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plan;
