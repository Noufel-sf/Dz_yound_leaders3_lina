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
    title: "ما قبل التاريخ",
    description:
      "رحلة إلى البدايات الأولى للإنسان في الجزائر، حيث نكتشف آثار الحضارات القديمة ورسومات الطاسيلي التي تحفظ ذاكرة آلاف السنين من الوجود البشري.",
    image: "/ep1.png",
    date: "2026",
    location: "بودكاست إرث وأثر",
    attendees: 0,
    duration: "45 دقيقة",
    link: "#",
    tags: ["التاريخ القديم", "الطاسيلي", "الإنسان الأول"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "2",
    title: "فجر السيادة",
    description:
      "نتتبع نشأة الممالك النوميدية وصعود القادة الذين أسسوا أولى معالم السيادة السياسية في شمال إفريقيا، وعلى رأسهم ماسينيسا ويوغرطة.",
    image: "/ep1.png",
    date: "2026",
    location: "بودكاست إرث وأثر",
    attendees: 0,
    duration: "50 دقيقة",
    link: "#",
    tags: ["نوميديا", "ماسينيسا", "يوغرطة"],
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    id: "3",
    title: "الراية الخضراء",
    description:
      "نستكشف دخول الإسلام إلى الجزائر وكيف ساهم في تشكيل الهوية الثقافية والحضارية للمنطقة، وظهور دول ومراكز علمية كان لها أثر عميق في التاريخ الإسلامي.",
    image: "/ep1.png",
    date: "2026",
    location: "بودكاست إرث وأثر",
    attendees: 0,
    duration: "55 دقيقة",
    link: "#",
    tags: ["الإسلام", "الحضارة", "الهوية"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "4",
    title: "سادة المتوسط",
    description:
      "حلقة تسلط الضوء على القوة البحرية الجزائرية خلال العهد العثماني، ودور الجزائر كقوة إقليمية مؤثرة فرضت حضورها في البحر الأبيض المتوسط لقرون.",
    image: "/ep1.png",
    date: "2026",
    location: "بودكاست إرث وأثر",
    attendees: 0,
    duration: "60 دقيقة",
    link: "#",
    tags: ["العهد العثماني", "البحرية الجزائرية", "المتوسط"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "5",
    title: "ثورة الروح",
    description:
      "من المقاومة الشعبية إلى ثورة التحرير المباركة، نستعرض كيف حافظ الشعب الجزائري على هويته وكرامته حتى استعاد استقلاله بعد تضحيات عظيمة.",
    image: "/ep1.png",
    date: "2026",
    location: "بودكاست إرث وأثر",
    attendees: 0,
    duration: "65 دقيقة",
    link: "#",
    tags: ["المقاومة", "الثورة الجزائرية", "الاستقلال"],
    gradient: "from-red-500 to-rose-600",
  },
  {
    id: "6",
    title: "الجزائر الجديدة",
    description:
      "نناقش تحديات وفرص الجزائر المعاصرة، وكيف يمكن للشباب استلهام دروس التاريخ للمساهمة في بناء مستقبل أكثر وعياً وازدهاراً.",
    image: "/ep1.png",
    date: "2026",
    location: "بودكاست إرث وأثر",
    attendees: 0,
    duration: "50 دقيقة",
    link: "#",
    tags: ["الشباب", "المستقبل", "الهوية الوطنية"],
    gradient: "from-purple-500 to-indigo-600",
  },
];
