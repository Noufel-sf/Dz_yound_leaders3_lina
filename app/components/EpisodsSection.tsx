// Components/EventsSection.tsx
import React, { useState } from "react";
import EpisodeCard from "./EpisodeCard";
import { episods } from "./data";

const EpisodsSection: React.FC = () => {
  return (
    <section className=" py-20 lg:py-32  overflow-hidden">
      {/* Background Decorations */}

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3  mb-12">
          
          <h1 className="heading text-[3.4rem] font-black leading-[1.1] tracking-tight text-primary sm:text-[3.2rem] lg:text-[6rem]">
            حلقات <span className="text-white heading">البرنامج</span>
          </h1>
          <p className="mt-4 max-w-2xl  text-sm text-center leading-7 text-white/50 sm:text-base">
          استكشفوا خريطة رحلة القادة الشباب في كل حلقة، واكتشفوا محطات النجاح الملهمة والإنجازات التي تصنع الأمل.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episods.map((episod, index) => (
            <div key={episod.id}>
              <EpisodeCard {...episod} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {episods.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">
              لا توجد فعاليات في هذه الفئة حالياً
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EpisodsSection;
