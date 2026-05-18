import Image from "next/image";
const phases = [
  {
    id: "01",
    title: "المرحلة الأولى: بناء الشخصية وصقل المهارات الناعمة",
    badge: "إلزامية",
    summary:
      "هذه المرحلة هي حجر الأساس في المخيم، وتهدف إلى تجهيز المشاركين بمهارات التواصل والقيادة وإدارة الذات قبل الانتقال إلى أي تخصص تقني.",
    points: [
      "التواصل والذكاء العاطفي: فهم أنماط الشخصيات، الإقناع، إدارة النزاعات، والتعامل بذكاء وفعالية.",
      "القيادة والعمل الجماعي: بناء الفرق عالية الأداء وتوزيع الأدوار بما يرفع الانسجام والإنتاجية.",
      "إدارة الذات والوقت: تقنيات الإنتاجية الشخصية، التعامل مع ضغط العمل، وتجنب الاحتراق الوظيفي.",
    ],
  },
  {
    id: "02",
    title: "المرحلة الثانية: التمكين التقني والمسارات التخصصية",
    badge: "إلزامية ثم اختيارية",
    summary:
      "تنطلق هذه المرحلة بتدريب مكثف على الذكاء الاصطناعي بوصفه المهارة الصلبة الأساسية، ثم يختار كل مشارك مسارًا تخصصيًا واحدًا للتطبيق العملي.",
    points: [
      "الذكاء الاصطناعي وPrompt Engineering: استخدام الأدوات الحديثة لرفع الإنتاجية وأتمتة المهام.",
      "المسارات المتاحة: ريادة الأعمال، التسويق الرقمي، وإدارة المشاريع.",
    ],
  },
  {
    id: "03",
    title: "المرحلة الثالثة: صناعة الأثر (TOT)",
    badge: "تأثير",
    summary:
      "تستهدف هذه المرحلة تحويل المتدربين المتميزين إلى صناع معرفة قادرين على نقل الخبرة وتقديمها باحترافية أمام الجمهور.",
    points: [
      "سيكولوجية تعلم الكبار وتصميم الحقائب التدريبية الاحترافية.",
      "مهارات الإلقاء، كاريزما الظهور، والتحكم في نبرة الصوت ولغة الجسد.",
      "إعداد متدربين قادرين على نقل المعرفة التقنية للأقران بشكل مستدام.",
    ],
  },
];

const specializedPaths = [
  {
    id: "01",
    title: "ريادة الأعمال",
    icon: "🚀",
    description: "بناء ريادة أعمال مستدامة من الفكرة إلى التطبيق",
    details: [
      "تطوير الفكرة وكتابة خطة العمل Business Plan الاحترافية",
      "دراسة السوق والجمهور المستهدف وتحليل المنافسين",
      "نماذج الإيرادات والتمويل والاستثمار في المشاريع الناشئة",
      "استخدام الذكاء الاصطناعي في تسريع نمو الشركات الناشئة",
      "بناء فريق متكامل والقيادة الفعالة للمشروع",
      "قياس الأداء والمؤشرات الرئيسية KPIs والقابلية للتوسع",
    ],
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-200/50",
  },
  {
    id: "02",
    title: "التسويق الرقمي",
    icon: "📱",
    description: "إتقان أدوات التسويق الرقمي للوصول إلى الجمهور المستهدف",
    details: [
      "استراتيجية التسويق الرقمي الشاملة والمتكاملة",
      "تحسين محركات البحث SEO والإعلانات المدفوعة SEM",
      "التسويق عبر وسائل التواصل الاجتماعي والمحتوى الفيروسي",
      "البريد الإلكتروني والتسويق بالعلاقات CRM",
      "تحليل البيانات والإحصائيات لقياس فعالية الحملات",
      "استخدام الذكاء الاصطناعي في أتمتة التسويق والتنبؤ بسلوك المستهلك",
    ],
    color: "from-purple-500/20 to-pink-600/20",
    borderColor: "border-purple-200/50",
  },
  {
    id: "03",
    title: "إدارة المشاريع",
    icon: "📊",
    description: "إدارة المشاريع بكفاءة عالية والتسليم في الوقت المحدد",
    details: [
      "أساسيات إدارة المشاريع والمنهجيات Agile و Waterfall",
      "تخطيط المشروع وتحديد النطاق والموارد والجدول الزمني",
      "إدارة المخاطر والتعامل مع التحديات والتغييرات",
      "قيادة الفريق والتواصل الفعال بين أصحاب المصلحة",
      "مراقبة التقدم وقياس الأداء والانحرافات",
      "استخدام أدوات إدارة المشاريع الحديثة والذكاء الاصطناعي في التنبؤ والتحسين",
    ],
    color: "from-green-500/20 to-emerald-600/20",
    borderColor: "border-green-200/50",
  },
];

const evaluations = [
  {
    title: "التقييم المعرفي",
    text: "اختبارات قبلية وبعدية لقياس تطور المهارات الناعمة والتقنية المكتسبة.",
  },
  {
    title: "المشاريع التطبيقية",
    text: "تقييم جودة المشاريع النهائية ومدى دمج أدوات الذكاء الاصطناعي فيها.",
  },
  {
    title: "الأداء التدريبي",
    text: "عرض حي (Demo Day) لقياس قوة الإلقاء والقدرة على نقل المعلومة.",
  },
  {
    title: "قياس الأثر والرضا",
    text: "استطلاعات رأي دورية لقياس ملاءمة البرنامج للفئة العمرية 18-35 سنة.",
  },
];

export default function Program() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-8 lg:px-12" dir="rtl">
      <div className="absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
           <div className="">
            <Image src="/img.svg" alt="فريق انطلاقتك" width={68} height={68} />
          </div>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            <span className="heading marker-underline text-primary heading">النشاطات</span>
            <span className="heading marker-underline mr-2 heading">والبرنامج التدريبي </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            تعتمد منهجية التدريب في المخيم على ثلاث مراحل تكاملية تضمن الانتقال السلس من
            التأسيس إلى التخصص ثم التأثير، مع مسارات واضحة للتعلم والتطبيق والتقييم.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.id}
              className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
            >
              <div className="absolute right-0 top-0 h-1 w-full" />
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-black text-primary">
                  {phase.id}
                </span>
                <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                  {phase.badge}
                </span>
              </div>

              <h3 className="mt-5 heading text-xl font-black leading-snug text-slate-900">
                {phase.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{phase.summary}</p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {phase.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-secondary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Specialized Paths Section */}
        <div className="mt-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-4xl heading font-black leading-tight">
              <span className="heading marker-underline text-primary">رابعًا:</span>
              <span className="mx-2 heading">المسارات التخصصية</span>
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
              اختر مسارك المفضل واكتسب المهارات العملية اللازمة لتحقيق أحلامك في أحد هذه المجالات الثلاثة الواعدة.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {specializedPaths.map((path) => (
              <div
                key={path.id}
                className={`group relative overflow-hidden rounded-3xl border ${path.borderColor} bg-gradient-to-br ${path.color} p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-opacity-100 backdrop-blur-sm`}
              >
                {/* Decorative Background */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-transform duration-300 group-hover:scale-150" />
                <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-transform duration-300 group-hover:scale-150" />

                <div className="relative z-10">
                  {/* Icon and Number */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-5xl">{path.icon}</span>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-sm font-black text-slate-700">
                      {path.id}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl heading font-black leading-snug text-slate-900 mt-4">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-slate-700 line-clamp-2">
                    {path.description}
                  </p>

                  {/* Details List */}
                  <ul className="mt-6 space-y-2">
                    {path.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2 text-xs leading-6 text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 flex-none" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14  p-6 sm:p-8">
          <div className="max-w-3xl">
            <h3 className="text-4xl heading font-black leading-tight ">
              <span className="heading marker-underline  text-primary">خامسًا:</span>
              <span className="mx-2 heading ">التقييم</span>
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              تعتمد عملية التقييم على نظام شامل يضمن جودة المخرجات وتحقيق الأهداف المرجوة.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {evaluations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-secondary/15 bg-white p-5 shadow-sm"
              >
                <h4 className="heading text-xl font-black text-secondary">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}