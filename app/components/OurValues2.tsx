export default function OurValues2() {
  const features = [
    {
      icon: "🔍",
      title: "نشر المعرفة التاريخية",
      body: "نقدم محتوى تاريخيًا مبسطًا وموثقًا يساعد الزوار على فهم تاريخ المدن العربية واكتشاف القصص التي شكلت ملامح الحضارة عبر العصور.",
    },
    {
      icon: "🏛️",
      title: "حفظ التراث العربي",
      body: "نعمل على تسليط الضوء على المعالم التاريخية والآثار الثقافية التي تمثل جزءًا مهمًا من هوية المنطقة وتاريخها، وحفظ إرثها للأجيال القادمة.",
    },
    {
      icon: "👥",
      title: "بناء مجتمع مهتم بالتاريخ",
      body: "نسعى لبناء مجتمع واسع من المهتمين بالتاريخ العربي والحضارة الإسلامية، يتشارك المعرفة ويتفاعل مع المحتوى الذي نقدمه.",
    },
    {
      icon: "🎯",
      title: "تجربة تعليمية تفاعلية",
      body: "من خلال الأدوات التفاعلية والتجارب الرقمية، نجعل التعلم عن تاريخ المدن العربية تجربة ممتعة ومشوقة تناسب جميع الأعمار.",
    },
  ];

  return (
    <section dir="rtl" className=" text-black px-8 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-black heading text-center mb-6 leading-tight">
          أثر منصة <span className="text-primary marker-underline heading">البوصلة</span> في إحياء التاريخ
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          تسعى منصة &ldquo;البوصلة&rdquo; إلى إعادة إحياء تاريخ المدن العربية وإبراز إرثها
          الحضاري من خلال محتوى معرفي موثوق وتجارب تفاعلية تُقرّب الماضي من
          الحاضر.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {features.map((f) => (
            <div key={f.title} className="text-center">
                <span role="img" aria-label="">
                  {f.icon}
                </span>
              <h3 className="text-3xl font-bold mb-3 heading">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
