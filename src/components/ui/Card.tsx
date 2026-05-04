import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card = ({ className, glass = false, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl",
        glass ? "glass-card" : "bg-white border border-slate-100 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
