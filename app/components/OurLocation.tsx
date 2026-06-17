function OurLocation() {
  return (
    <section className="relative overflow-hidden  px-6 py-20 sm:px-10">
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
        
          <h1 className="heading text-[3.4rem] font-black leading-[1.1] tracking-tight text-white sm:text-[3.2rem] lg:text-[6rem]">
            موقع <span className="text-primary heading">البرنامج</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white sm:text-base">
          استكشفوا خريطة رحلة القادة الشباب في كل حلقة، واكتشفوا محطات النجاح الملهمة والإنجازات التي تصنع الأمل.
          </p>
        </div>

        <div className="relative overflow-hidden  border-4 border-black  transition duration-500 bg-white shadow-[10px_10px_0_0_rgba(246,187,4,1)]">
         
          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] bg-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.214498421827!2d6.1680614890718735!3d36.1613346323918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f3c3c777d1754d%3A0x4100c9c017aaeff2!2z2K_Yp9ixINin2YTYtNio2KfYqA!5e0!3m2!1sfr!2sdz!4v1766782344820!5m2!1sfr!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col gap-2 border-t-4 border-black bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                العنوان
              </p>
              <p className="text-base font-bold heading text-slate-900">
                شلغوم العيد، الجزائر
              </p>
            </div>
            <a
              href="https://www.google.com/maps?ll=36.161335,6.168061&q=36.1613346323918,6.1680614890718735"
              target="_blank"
              rel="noopener noreferrer"
              className="heading inline-flex items-center justify-center  border-2 border-black bg-primary px-5 py-2 text-sm font-bold text-black shadow-[3px_3px_0_0_#111111] transition-transform hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            >
              افتح على الخريطة
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurLocation;
