"use client";

import React from "react";
import { MapPin, Calendar, Clock, Home as HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeConfig } from "@/lib/themes";

interface TemplateRendererProps {
  theme: ThemeConfig;
  data: any;
  guestName?: string | null;
  isMini?: boolean;
}

export const TemplateRenderer = ({ theme, data, guestName, isMini = false }: TemplateRendererProps) => {
  const { colors, fonts, styles } = theme;

  const isWedding = theme.id.includes("wedding") || theme.id.includes("engagement");

  // Premium Divider
  const DecorativeDivider = () => (
    <div className="decorative-divider" style={{ color: colors.accent }}>
      <span className={cn(isMini ? "text-[10px]" : "text-xl")}>❦</span>
    </div>
  );

  const DateBlock = () => (
    <div className={cn("text-center space-y-4", isMini ? "scale-75" : "my-12")}>
      <div className={cn("flex flex-col items-center justify-center")}>
        <span className={cn("uppercase tracking-[0.3em] font-sans font-bold opacity-40 mb-2", isMini ? "text-[6px]" : "text-[10px]")}>When</span>
        <div className={cn("flex items-center gap-4")}>
          <div className={cn("h-px bg-current opacity-20", isMini ? "w-4" : "w-10")} />
          <span className={cn("font-serif", isMini ? "text-[10px]" : "text-2xl")}>{data.date || "Saturday, 12th June"}</span>
          <div className={cn("h-px bg-current opacity-20", isMini ? "w-4" : "w-10")} />
        </div>
        <span className={cn("font-sans mt-2 opacity-60", isMini ? "text-[8px]" : "text-lg")}>{data.time || "At Four O'Clock in the Afternoon"}</span>
      </div>

      <div className={cn("flex flex-col items-center justify-center pt-4")}>
        <span className={cn("uppercase tracking-[0.3em] font-sans font-bold opacity-40 mb-2", isMini ? "text-[6px]" : "text-[10px]")}>Where</span>
        <span className={cn("font-serif", isMini ? "text-[10px]" : "text-2xl")}>{data.locationName || "The Grand Plaza Hotel"}</span>
        <span className={cn("font-sans mt-1 opacity-60", isMini ? "text-[8px]" : "text-base")}>{data.locationDetails || "123 Elegance Avenue, Cityscape"}</span>
      </div>
    </div>
  );

  const renderWeddingLayout = () => (
    <div className={cn(
      "h-window w-full relative flex items-center justify-center overflow-hidden bg-[#fdfbf7] bg-texture-paper",
      !isMini && "p-4 md:p-12"
    )}>
      {/* Background Atmosphere */}
      {!isMini && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-20" />
        </>
      )}

      <div className={cn(
        "relative z-10 w-full max-w-2xl transition-all duration-1000 overflow-y-auto no-scrollbar max-h-full",
        styles.card,
        isMini ? "p-6 scale-[0.85] origin-top" : "p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] bg-texture-linen rounded-[1rem] md:rounded-[2rem]"
      )} style={{ color: colors.text }}>
        
        {/* Ceremonial Header */}
        <div className={cn("text-center space-y-1 mb-6 md:mb-8")}>
          <span className={cn("uppercase tracking-[0.4em] font-sans font-bold opacity-50", isMini ? "text-[6px]" : "text-[8px] md:text-[10px]")}>
            Together with their families
          </span>
        </div>

        {/* Couple Names */}
        <div className="text-center">
          <h1 className={cn(
            "font-serif leading-tight",
            isMini ? "text-xl" : "text-4xl md:text-6xl"
          )} style={{ color: colors.primary }}>
            {data.groomName || "Johnathan"}
            <span className={cn("block font-sans italic opacity-40 my-1", isMini ? "text-xs" : "text-2xl")}>&</span>
            {data.brideName || "Eleanor"}
          </h1>
        </div>

        <DecorativeDivider />

        {/* Invitation Message */}
        <div className="text-center max-w-sm mx-auto">
          <p className={cn(
            "font-sans font-medium leading-relaxed opacity-70",
            isMini ? "text-[7px] line-clamp-2" : "text-sm md:text-base"
          )}>
            {data.message || "Request the honor of your presence as they exchange vows and celebrate the beginning of their new life together."}
          </p>
        </div>

        {guestName && (
          <div className={cn(
            "text-center",
            isMini ? "my-1" : "my-6"
          )}>
            <span className={cn("font-cursive opacity-60", isMini ? "text-[10px]" : "text-xl md:text-2xl")}>Dear {guestName},</span>
          </div>
        )}

        <DateBlock />

        {/* Footer Detail */}
        <div className={cn("text-center mt-6 md:mt-8 opacity-30 uppercase tracking-[0.5em] font-sans", isMini ? "text-[5px]" : "text-[8px]")}>
          Reception to follow
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (isWedding) return renderWeddingLayout();

    switch (theme.id) {
      case "housewarming-cozy":
      case "birthday-kids":
        return (
          <div className={cn("flex flex-col items-center justify-center text-center h-full", isMini ? "p-4" : "p-8 md:p-12")}>
            <div className={cn("w-full shadow-xl border bg-texture-paper", isMini ? "p-4 rounded-2xl" : "p-12 rounded-[3rem]")} style={{ backgroundColor: '#ffffff', borderColor: `${colors.primary}20` }}>
              {theme.id.includes("housewarming") ? (
                <HomeIcon className={cn("mx-auto mb-4", isMini ? "w-6 h-6" : "w-12 h-12")} style={{ color: colors.primary }} />
              ) : (
                 <div className={cn("mx-auto mb-4 flex justify-center gap-1", isMini ? "scale-50" : "")}>
                    <div className="w-4 h-6 bg-red-400 rounded-full animate-balloon-float" />
                    <div className="w-4 h-6 bg-blue-400 rounded-full animate-balloon-float" style={{ animationDelay: '0.5s' }} />
                 </div>
              )}
              <h1 className={cn("font-bold mb-2", isMini ? "text-lg" : "text-4xl")} style={{ color: colors.text }}>
                {theme.id.includes("housewarming") ? "New Home, New Beginnings" : "You're Invited!"}
              </h1>
              <h2 className={cn("my-4", isMini ? "text-xs" : "text-2xl")} style={{ color: colors.secondary }}>
                {data.hostName || data.personName || "The Smiths"}
              </h2>
              <p className={cn("opacity-70 mb-6", isMini ? "text-[8px] line-clamp-2" : "text-lg")}>{data.message}</p>
              <div className={cn("rounded-2xl p-4", isMini ? "p-2" : "p-6")} style={{ backgroundColor: `${colors.primary}10` }}>
                 <div className={cn("space-y-1", isMini ? "text-[10px]" : "text-xl")}>
                   <p>{data.date} • {data.time}</p>
                   <p className="font-bold">{data.locationName}</p>
                 </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={cn("flex flex-col items-center justify-center text-center h-full bg-texture-paper", isMini ? "p-6" : "p-12")}>
             <h1 className={cn("font-serif mb-6", isMini ? "text-2xl" : "text-6xl")}>{data.title || "Invitation"}</h1>
             <p className={cn("opacity-60 mb-8", isMini ? "text-xs" : "text-2xl")}>{data.date} @ {data.time}</p>
             <p className={cn("font-bold", isMini ? "text-sm" : "text-3xl")}>{data.locationName}</p>
          </div>
        );
    }
  };

  return (
    <div 
      className={cn("w-full h-full animate-fade-in", isMini ? "scale-100" : "min-h-screen overflow-x-hidden")} 
      style={{ 
        backgroundColor: colors.background, 
        color: colors.text,
        fontFamily: fonts.body === "serif" ? 'var(--font-serif)' : fonts.body === "cursive" ? 'var(--font-cursive)' : 'var(--font-sans)'
      }}
    >
      {renderContent()}
    </div>
  );
};
