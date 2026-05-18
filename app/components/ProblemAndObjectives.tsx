import Image from "next/image";

const objectives = [
  "بناء الشخصية القيادية",
  "التمكين التقني الشامل",
  "التخصص المهني المرن",
  "الاستدامة المعرفية",
];

const expectedResults = [
  "تطوير المهارات الناعمة والذكاء العاطفي لدى 100% من المشاركين، مما يعزز قدرتهم على العمل الجماعي والقيادة.",
  "إتقان جميع المشاركين لأساسيات الذكاء الاصطناعي وهندسة الأوامر (Prompt Engineering) وتطبيقها في أتمتة المهام اليومية.",
  "إنجاز مشاريع تطبيقية في مسارات اختيارية (ريادة الأعمال، التسويق الرقمي، أو إدارة المشاريع) تعتمد بشكل أساسي على أدوات الذكاء الاصطناعي.",
  "تأهيل شبكة من المدربين المعتمدين (TOT) القادرين على تصميم وتقديم حقائب تدريبية احترافية لنشر المعرفة التقنية.",
];

const solutions = [
  {
    icon: "01",
    title: "تكوين متدرج",
    body: "برنامج تدريبي يجمع بين المعرفة النظرية والتطبيق العملي في السياسة وصناعة القرار.",
    accent: "bg-primary/8 border-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: "02",
    title: "مسارات متخصصة",
    body: "ورشات في القانون والإدارة والمهارات القيادية لتأهيل الشباب للاندماج المؤسساتي.",
    accent: "bg-primary/8 border-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: "03",
    title: "محاكاة وممارسة",
    body: "جلسات محاكاة للمجالس المنتخبة وصناعة القرار لتقليص الفجوة بين الشباب والمؤسسات.",
    accent: "bg-primary/8 border-primary/20",
    iconColor: "text-primary",
  },
];

export default function ProblemAndObjectives() {
  return (
    <section
      id="problem-objectives"
      dir="rtl"
      className="relative overflow-hidden  px-4 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl space-y-14">
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="pr-6">
              <div className="">
                     <Image
                       src="/img.svg"
                       alt="فريق انطلاقتك"
                       width={78}
                       height={78}
                     />
                   </div>
         
          <h2 className="heading text-4xl font-black leading-tight text-slate-900 sm:text-6xl">
            الإشكالية،{" "}
            <span className="relative text-primary marker-underline heading">
              الحلول
              {/* <svg
                className="absolute -bottom-2 right-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 6 C50 2, 150 2, 198 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg> */}
            </span>{" "}
            والأهداف
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
            يعالج البرنامج فجوة قائمة بين الشباب والمجالس المنتخبة عبر مسار
            تكويني متكامل يؤهل الشباب للمشاركة الفعالة في الحياة العامة.
          </p>
        </div>

        {/* ── Problem + Goal ─────────────────────────────────── */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Problem */}
          <div className="group relative overflow-hidden rounded-3xl bg-rose-50 p-8 border border-rose-100">
            <p className="heading text-2xl font-bold uppercase tracking-widest text-rose-500 mb-4">
              الإشكالية
            </p>
               <h3 className="heading text-xl font-extrabold text-red-900 sm:text-xl leading-snug">
              تمكين الفئة المستهدفة من امتلاك أدوات المستقبل
            </h3>

            <p className="mt-4 text-base leading-8 text-rose-800/80">
              يعاني الشباب (18–35 سنة) من صعوبة مواكبة التحولات الرقمية بسبب
              فجوة بين التعليم التقليدي ومتطلبات سوق العمل. كما يفتقر الكثير
              منهم لإتقان أدوات الذكاء الاصطناعي كمهارة أساسية للإنتاج. ويواجهون
              صعوبة في تحديد المسارات التقنية عمليًا، مما يضعف تنافسيتهم المهنية
              ونقل المعرفة بينهم.
            </p>
            {/* decorative number */}
            <span className="absolute -left-3 -bottom-6 text-[7rem] font-black text-rose-200/60 select-none leading-none pointer-events-none">
              ؟
            </span>
          </div>

          {/* Goal */}
          <div className="group relative overflow-hidden rounded-3xl bg-emerald-50 p-8 ">
            <p className="heading text-2xl font-bold uppercase tracking-widest text-emerald-600 mb-4">
              الهدف العام
            </p>
            <h3 className="heading text-xl font-extrabold text-emerald-900 sm:text-xl leading-snug">
              تمكين الفئة المستهدفة من امتلاك أدوات المستقبل
            </h3>
            <p className="mt-4 text-base leading-8 text-emerald-900/80">
              عبر دمج الذكاء الاصطناعي كركيزة معرفية إلزامية لجميع المشاركين.
              يسعى المشروع إلى صقل الشخصية القيادية وتوفير مسارات تخصصية
              اختيارية تتيح للشباب تطبيق التقنيات الحديثة في مجالاتهم المهنية،
              وصو لاً إلى إعداد جيل من المدربين القادرين على صناعة الأثر ونقل
              الخبرات بفعالية في المجتمع
            </p>
            <span className="absolute -left-3 -bottom-6 text-[7rem] font-black text-emerald-200/60 select-none leading-none pointer-events-none">
              ✓
            </span>
          </div>
        </div>

        {/* ── Target Audience ────────────────────────────────── */}
        <div className="rounded-3xl  bg-white p-8 sm:p-10">
          <div className="flex items-start gap-5">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3 className="heading text-2xl font-extrabold text-slate-900 sm:text-3xl">
                الفئة المستهدفة
              </h3>
              <p className="mt-3 text-base leading-8 text-slate-600 sm:text-lg">
                الشباب من{" "}
                <span className="font-bold text-primary">18 إلى 35 سنة</span> من
                الطلبة والناشطين والمهتمين بالمجال العام، ممن يسعون لتطوير
                معارفهم ومهاراتهم في السياسة والقانون والإدارة وتعزيز مشاركتهم
                المجتمعية.
              </p>
            </div>
          </div>
        </div>

        {/* ── Objectives + Results ───────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Objectives */}
          <div className="rounded-3xl  bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-primary"
                >
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </span>
              <h3 className="heading text-xl font-extrabold text-slate-900 sm:text-2xl">
                الأهداف الخاصة
              </h3>
            </div>
            <ul className="space-y-3">
              {objectives.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 "
                >
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-7 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="rounded-3xl  bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-emerald-600"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </span>
              <h3 className="heading text-xl font-extrabold text-slate-900 sm:text-2xl">
                النتائج المنتظرة
              </h3>
            </div>
            <ul className="space-y-3">
              {expectedResults.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-emerald-50/60 px-4 py-3 border border-emerald-100"
                >
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="text-emerald-600"
                    >
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  </span>
                  <span className="text-sm leading-7 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Solutions ──────────────────────────────────────── */}
        <div className=" p-6 sm:p-10">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex-1 " />
            <h3 className="heading  font-extrabold  text-4xl">
              الحلول{" "}
              <span className="text-primary marker-underline heading">
                المقترحة
              </span>
            </h3>
            <div className="flex-1" />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="group cursor-pointer rounded-2xl border border-primary/15 bg-white p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-200"
              >
                <span className="block font-black text-3xl text-primary/20 mb-4 leading-none">
                  {item.icon}
                </span>
                <h4 className="heading text-lg font-extrabold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm leading-7 text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
