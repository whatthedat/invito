"use client";

import React from "react";
import { TemplateRenderer } from "./TemplateRenderer";
import { ThemeConfig } from "@/lib/themes";

interface MiniInvitePreviewProps {
  theme: ThemeConfig;
  data?: any;
}

export const MiniInvitePreview = ({ theme, data = {} }: MiniInvitePreviewProps) => {
  return (
    <div className="w-full h-full relative group">
      {/* Scaled Preview Wrapper */}
      <div className="w-full h-full overflow-hidden rounded-3xl border border-slate-100 shadow-lg group-hover:shadow-2xl transition-all duration-500">
        <TemplateRenderer 
          theme={theme} 
          data={data} 
          isMini={true} 
        />
      </div>
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none rounded-3xl" />
      
      {/* "Preview" Badge */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border border-slate-100 text-slate-500">
        {theme.name}
      </div>
    </div>
  );
};
