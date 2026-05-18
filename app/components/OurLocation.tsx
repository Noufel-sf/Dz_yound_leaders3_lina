function OurLocation() {
  return (
    <section className="relative flex flex-col gap-5 items-center overflow-hidden ">
        <h1 className="heading mb-5 text-[2.4rem] font-bold leading-[1.15] tracking-tight text-slate-900 lg:text-[4rem]">
            موقع 
          <span className="text-primary heading marker-underline">انطلاقتك</span>
        </h1>
      {/* Map Embed */}
      <div className="relative w-full h-100 lg:h-125 bg-slate-200">
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

    
    </section>
  );
}

export default OurLocation;
