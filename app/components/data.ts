export interface Episode {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  attendees: number;
  duration: string;
  link: string;
  tags: string[];
  gradient: string;
}
export const episods: Episode[] = [
  {
    id: "1",
    title: "ورشة التربية النفسية",
    description:
      "للتوعية والتحسيس بالأمراض والاضطرابات النفسية للأفراد والمجتمع وطرق التعامل معها",
    image: "/ep1.png",
    date: "15 يناير 2026",
    location: "  دار الشباب",
    attendees: 45,
    duration: "يومين",
    link: "https://www.facebook.com/share/p/1FNb7RGeDu/",
    tags: ["حماية الطبيعة", "ورش عملية", "للمبتدئين"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "2",
    title: "ورشة المهارات الحياتية",
    description:
      "سلسلة من الورشات التدريبية في المهارات الحياتية 💡ضمن برنامج العطلة الشتوية",
    image: "/ep1.png",
    date: "22 يناير 2026",
    location: "  دار الشباب",
    attendees: 200,
    link: "https://www.facebook.com/share/p/1FRJ1GycKd/",

    duration: "نصف يوم",
    tags: ["بناء المجتمع", "فعاليات ثقافية", "للجميع"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "3",
    title: "الملتقى التوجيهي",
    description:
      "للتعرف على التخصصات الجامعية المتاحة ومساعدتك في اتخاذ القرار الأفضل لمسارك الأكاديمي",
    image: "/ep1.png",
    date: "5 فبراير 2026",
    location: "  دار الشباب",
    attendees: 80,
    link: "https://www.facebook.com/share/p/185Pm7RED5/",

    duration: "4 ساعات",
    tags: ["حماية الطبيعة", "تطوع", "نشاط خارجي"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "4",
    title: "صناعة البودكاست🎙",
    description:
      "منصة للشباب المبدعين لعرض أفكارهم ومشاريعهم الابتكارية. فرصة للتواصل مع رواد الأعمال والمستثمرين.",
    image: "/ep1.png",
    date: "10 ديسمبر 2025",
    link: "https://www.facebook.com/share/p/17jZwUMnRe/",
    location: "  دار الشباب",
    attendees: 120,
    duration: "يوم كامل",
    tags: ["بناء المجتمع", "ريادة الأعمال", "تواصل"],
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "5",
    title: "دورة الشباب القائد",
    description:
      " فرصة جديدة للتكوين، للتعبير، للتعلم، وللتميز وتبادل الافكار وتعلم المهارات القيادية",
    image: "/ep1.png",
    date: "28 نوفمبر 2025",
    location: "  دار الشباب",
    attendees: 60,
    link: "https://www.facebook.com/share/p/1C1UGgcNZ3/",

    duration: "يومين",
    tags: ["رعاية الأطفال", "تعليم", "ترفيه"],
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: "6",
    title: "ملتفى الشباب",
    description:
      "فرصة للشباب للتواصل، تبادل الأفكار، وتنظيم الأنشطة المجتمعية في جو من التعاون والابتكار.",
    image: "/ep1.png",
    date: "15 نوفمبر 2025",
    location: "  دار الشباب",
    attendees: 150,
    duration: "يومين",
    link: "https://www.facebook.com/share/p/1MnxPwH3pU/",

    tags: ["حماية الطبيعة", "تطوع", "مجتمع"],
    gradient: "from-green-600 to-teal-600",
  },
];
