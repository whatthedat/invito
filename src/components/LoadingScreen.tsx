"use client";

import React from "react";
import { Home as HomeIcon, Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { EventType } from "@/lib/themes";

interface LoadingScreenProps {
  eventType: EventType;
}

export const LoadingScreen = ({ eventType }: LoadingScreenProps) => {
  const content = {
    wedding: {
      bg: "bg-rose-50",
      text: "Two hearts, one journey...",
      textColor: "text-rose-600",
      icon: (
        <div className="relative w-24 h-24 flex items-center justify-center">
          <Heart className="w-16 h-16 text-rose-500 animate-pulse-slow fill-rose-100" />
          <div className="absolute inset-0 border-4 border-rose-300 rounded-full animate-float opacity-30" />
          <div className="absolute inset-4 border-2 border-rose-200 rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }} />
        </div>
      )
    },
    engagement: {
      bg: "bg-purple-50",
      text: "The beginning of forever...",
      textColor: "text-purple-600",
      icon: (
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-purple-400 rotate-45 animate-pulse-slow" />
          <div className="absolute w-12 h-12 border-2 border-purple-300 rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
        </div>
      )
    },
    housewarming: {
      bg: "bg-emerald-50",
      text: "Welcome to our new home",
      textColor: "text-emerald-700",
      icon: (
        <div className="relative w-32 h-32 overflow-hidden flex items-center justify-center">
          <div className="w-20 h-20 bg-emerald-600 rounded-lg animate-door-open origin-left shadow-lg flex items-center justify-center">
             <div className="w-2 h-2 bg-yellow-400 rounded-full absolute right-2 top-1/2" />
          </div>
          <HomeIcon className="w-24 h-24 text-emerald-200 absolute -z-10" />
        </div>
      )
    },
    birthday: {
      bg: "bg-amber-50",
      text: "Let's celebrate!",
      textColor: "text-amber-700",
      icon: (
        <div className="flex gap-4">
          <div className="w-8 h-12 bg-rose-400 rounded-full animate-balloon-float" />
          <div className="w-8 h-12 bg-blue-400 rounded-full animate-balloon-float" style={{ animationDelay: '0.5s' }} />
          <div className="w-8 h-12 bg-yellow-400 rounded-full animate-balloon-float" style={{ animationDelay: '1s' }} />
        </div>
      )
    }
  };

  const current = content[eventType] || content.birthday;

  return (
    <div className={cn("fixed inset-0 z-[100] flex flex-col items-center justify-center transition-colors duration-700", current.bg)}>
      <div className="mb-12 animate-scale-in">
        {current.icon}
      </div>
      <p className={cn("text-2xl font-serif italic animate-fade-in text-center px-6", current.textColor)}>
        {current.text}
      </p>
      
      <div className="mt-20 w-48 h-1 bg-black/5 rounded-full overflow-hidden">
        <div className="h-full bg-black/20 animate-[loading-bar_2s_ease-in-out_infinite]" style={{ width: '30%' }} />
      </div>
      
      <style jsx>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); width: 30%; }
          50% { width: 60%; }
          100% { transform: translateX(200%); width: 30%; }
        }
      `}</style>
    </div>
  );
};
