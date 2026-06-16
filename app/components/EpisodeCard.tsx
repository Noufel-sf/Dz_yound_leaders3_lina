// Components/EventCard.tsx
import React from "react";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

interface EpisodeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  attendees?: number;
  duration?: string;
  tags: string[];
  link: string;
  gradient?: string;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  title,
  description,
  image,
  date,
  location,
  attendees,
  duration,
  tags,
  link,
  gradient = "from-primary to-secondary",
}) => {
  return (
    <a 
      href={link}
      target={link.startsWith("http") ? "_blank" : undefined}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
    >

    <div
    
      className="group relative h-full bg-white"
    >
      <div className="relative h-full cursor-pointer border-4 border-black  shadow-[10px_10px_0_0_#ffffff] overflow-hidden  transition-all duration-300 ">
        {/* Status Badge */}
       

        {/* Event Image with Overlay */}
        <div className="relative h-64 overflow-hidden">
          <div
            className="absolute inset-0 cursor-pointer"
            style={{ zIndex: 1 }}
          />
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="w-full h-full p-2 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient ${gradient} opacity-20 mix-blend-overlay`} />
        </div>

        {/* Content Section */}
        <div className="relative p-6 space-y-4">
          {/* Title */}
          <h3 className="text-2xl font-bold leading-tight line-clamp-2 ">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span
              key={index}
                className="px-3 py-1 bg-secondary backdrop-blur-sm  text-xs     transition-colors"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-3 py-1 bg-secodary text-slate-300 text-xs rounded-full border border-slate-700/50">
                +{tags.length - 3}
              </span>
            )}
          </div>

          {/* Divider */}

          {/* Event Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 ">
              <Calendar className="w-4 h-4 shrink-0" />
              <span className="text-sm font-medium">{date}</span>
            </div>

            {location && (
              <div className="flex items-center gap-3 ">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-sm line-clamp-1">{location}</span>
              </div>
            )}

            <div className="flex items-center justify-between">
            

              {duration && (
                <div className="flex items-center gap-2 ">
                  <Clock className="w-4 h-4  shrink-0" />
                  <span className="text-sm">{duration}</span>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <button
           
            className="w-full mt-4 cursor-pointer flex items-center justify-center gap-2 bg-secondary shadow-[5px_5px_0_0_#111111] text-white font-semibold py-3 px-6 "
          >
            <span> اعرف المزيد </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient ${gradient} opacity-10 blur-xl`} />
        </div>
      </div>
    </div>
                </a>
  );
};

export default EpisodeCard;
