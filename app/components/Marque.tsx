export default function Marque() {
  const items = [
    "الذكاء الاصطناعي",
    "التسويق الرقمي",
    "ريادة الأعمال",
    "ريادة الأعمال",
    "ريادة الأعمال",
    "ريادة الأعمال",
    "ريادة الأعمال",
    "إدارة المشاريع",
    "المهارات الناعمة",
    "المهارات الناعمة",
    "المهارات الناعمة",
    "المهارات الناعمة",
    "المهارات الناعمة",

    "Prompt Engineering",
    "صناعة الأثر",
  ];

  return (
    <div dir="rtl" className="relative overflow-hidden bg-yellow-200 py-6 sm:py-8">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {/* First set of items */}
        {items.map((item, idx) => (
          <div key={`first-${idx}`} className="flex items-center gap-8 shrink-0">
            <span className="text-lg sm:text-xl font-black text-slate-900 heading">
              {item}
            </span>
            <span className="text-2xl text-yellow-500 font-black">✦</span>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {items.map((item, idx) => (
          <div key={`second-${idx}`} className="flex items-center gap-8 shrink-0">
            <span className="text-lg sm:text-xl font-black text-slate-900 heading">
              {item}
            </span>
            <span className="text-2xl text-yellow-500 font-black">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}



