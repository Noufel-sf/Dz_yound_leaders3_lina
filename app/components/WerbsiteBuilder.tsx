import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    id: "whatsapp",
    label: "واتساب",
    value: "0796528894",
    href: "https://api.whatsapp.com/send/?phone=213540355191&text&type=phone_number&app_absent=0",
  },
  {
    id: "instagram",
    label: "إنستغرام",
    value: "@Noufel.2.0",
    href: "https://www.instagram.com/Noufel.2.0",
  },
  {
    id: "email",
    label: "البريد الإلكتروني",
    value: "noufelnasridevelopment@gmail.com",
    href: "mailto:noufelnasridevelopment@gmail.com",
  },
];

export default function WerbsiteBuilder() {
  return (
    <section
      id="website-builder"
      dir="rtl"
      className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        <span className="heading inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
          خدمة بناء المواقع
        </span>

        <h2 className="heading mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
          مصمم{" "}
          <span className="marker-underline text-primary heading">الموقع </span>
          <br className="hidden sm:block" />
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          نقدم خدمة تصميم وتطوير مواقع عصرية بسرعة عالية وتجربة استخدام واضحة،
          مع صفحات تعريف، خدمات، تواصل، وتحسين أساسي لمحركات البحث.
        </p>

        <div className="mx-auto mt-10 rounded-full flex w-full max-w-3xl flex-col items-center px-5 py-6  sm:px-8 sm:py-8">
          <Image
            src="/builder.jpg"
            alt="واجهة بناء موقع إلكتروني"
            width={180}
            height={160}
            className=" max-w-xl rounded-full"
            priority
          />
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          {contacts.map((contact) => (
            <Link
              key={contact.id}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-primary/20 bg-white px-5 py-4 text-right transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <p className="text-xs font-semibold tracking-widest text-primary">
                {contact.label}
              </p>
              <p className="mt-1 text-sm font-bold text-slate-800 sm:text-base">
                {contact.value}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
