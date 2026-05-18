export default function OurGoal() {
  return (
    <section
      id="program-principle"
      dir="rtl"
      className="relative overflow-hidden px-4 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full marker-underline bg-primary animate-pulse" />
              برنامج البوصلة
            </span>

            <h2 className="heading text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              <span className="relative text-primary marker-underline heading">
                المبدأ الأساسي
              </span>{" "}
              للبرنامج
            </h2>

            <div className="h-px w-20 bg-primary/20" />

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <p className="text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
                برنامج “البوصلة” هو برنامج تكويني معرفي يهدف إلى تأهيل الشباب في
                مجالات السياسة وصناعة القرار،  <span className="font-extrabold text-red-600"> 
                  ويعتمد  على  مبدأ الحياد
                والاستقلالية، حيث لا يُستغل في الحملات الانتخابية ولا في الترويج
                لأي جهة أو تيار سياسي.
                </span>
              </p>

              <div className="rounded-3xl border border-primary/10 bg-primary/[0.04] p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">
                  التزام البرنامج
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  كما يلتزم البرنامج بتقديم محتوى موضوعي، وتوفير فضاء آمن للنقاش
                  المسؤول، قائم على احترام الآراء المختلفة دون انحياز أو توظيف
                  سياسي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
