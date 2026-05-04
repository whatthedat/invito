import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, icon, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && <label className="label-premium">{label}</label>}
        <div className="relative group">
          {icon && (
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-black transition-colors pointer-events-none">
              {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "input-premium",
              icon && "pl-14",
              error && "border-red-500 focus:ring-red-500/5",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-500 font-medium ml-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && <label className="label-premium">{label}</label>}
        <textarea
          ref={ref}
          className={cn(
            "input-premium min-h-[120px] resize-none",
            error && "border-red-500 focus:ring-red-500/5 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500 font-medium ml-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
