"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { 
  User, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2,
  Sparkles,
  Heart,
  Home as HomeIcon,
  Cake,
  Star,
  Music,
  Gift,
  PartyPopper,
  Camera,
  Bell,
  Gem,
  GlassWater
} from "lucide-react";
import { cn } from "@/lib/utils";
import { THEMES, EventType, getThemeById } from "@/lib/themes";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { MiniInvitePreview } from "@/components/MiniInvitePreview";

function CreateForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const flow = searchParams.get("flow") || "common";
  const type = (searchParams.get("type") as EventType) || "wedding";
  
  const availableThemes = THEMES[type] || THEMES["wedding"];
  const [selectedThemeId, setSelectedThemeId] = useState<string>(availableThemes[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedTheme = getThemeById(selectedThemeId) || availableThemes[0];

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      title: "",
      date: "",
      time: "",
      locationName: "",
      locationDetails: "",
      googleMapsLink: "",
      message: "",
      groomName: "",
      brideName: "",
      hostName: "",
      personName: "",
      guest: "",
    }
  });

  const formData = watch();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    const params = new URLSearchParams();
    params.set("type", type);
    params.set("flow", flow);
    params.set("templateId", selectedThemeId);
    Object.entries(data).forEach(([key, value]) => {
      if (value) params.set(key, String(value));
    });
    await new Promise(resolve => setTimeout(resolve, 1200));
    router.push(`/invite?${params.toString()}`);
  };

  const IconMap = {
    wedding: Heart,
    engagement: Star,
    housewarming: HomeIcon,
    birthday: Cake,
  };
  const EventIcon = IconMap[type] || Sparkles;

  return (
    <div className="min-h-screen bg-[#fffcf9] bg-texture-paper flex flex-col md:flex-row relative overflow-hidden">
      
      {/* Compact Sidebar Form */}
      <div className="w-full md:w-[320px] lg:w-[380px] bg-white border-r border-slate-100 flex flex-col h-screen overflow-hidden shadow-2xl z-20 shrink-0">
        
        {/* Compact Header */}
        <div className="p-3 border-b border-slate-50 flex items-center justify-between shrink-0">
          <Link href={`/select-event?flow=${flow}`}>
            <Button variant="ghost" size="sm" className="font-bold uppercase tracking-widest text-[8px] h-auto p-2">
              <ArrowLeft className="w-3 h-3 mr-1" /> Back
            </Button>
          </Link>
          <div className="flex items-center gap-1.5">
             <EventIcon className="w-3.5 h-3.5 text-rose-400" />
             <span className="text-[9px] font-black uppercase tracking-widest text-slate-900">{type} studio</span>
          </div>
          <div className="w-8" />
        </div>

        {/* Compact Scrollable Form */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-6">
          
          {/* Style Selection */}
          <div className="space-y-2">
            <h3 className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-300">1. Select Style</h3>
            <div className="grid grid-cols-1 gap-2.5">
              {availableThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedThemeId(theme.id)}
                  className={cn(
                    "group relative text-left h-[140px] transition-all duration-500 rounded-xl overflow-hidden border-2",
                    selectedThemeId === theme.id ? "border-black shadow-lg scale-[1.01]" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <div className="h-full scale-[0.5] origin-center -translate-y-6">
                    <MiniInvitePreview theme={theme} data={formData} />
                  </div>
                  <div className={cn(
                    "absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-white/95 to-transparent flex items-center justify-between",
                    selectedThemeId === theme.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}>
                    <span className="text-[8px] font-black text-slate-900 uppercase tracking-widest">{theme.name}</span>
                    {selectedThemeId === theme.id && <CheckCircle2 className="w-3 h-3 text-black" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <h3 className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-300">2. Invitation Content</h3>
            <form className="space-y-3">
              {(type === "wedding" || type === "engagement") && (
                <div className="grid grid-cols-2 gap-2.5">
                  <Input label="Groom" {...register("groomName", { required: true })} placeholder="John" className="py-2.5 px-3 text-[11px]" />
                  <Input label="Bride" {...register("brideName", { required: true })} placeholder="Jane" className="py-2.5 px-3 text-[11px]" />
                </div>
              )}
              {type === "housewarming" && (
                <Input label="Host" {...register("hostName", { required: true })} placeholder="The Smiths" className="py-2.5 px-3 text-[11px]" />
              )}
              {type === "birthday" && (
                <Input label="Name" {...register("personName", { required: true })} placeholder="Alice" className="py-2.5 px-3 text-[11px]" />
              )}

              <div className="grid grid-cols-2 gap-2.5">
                <Input label="Date" type="date" {...register("date", { required: true })} className="py-2.5 px-3 text-[11px]" />
                <Input label="Time" type="time" {...register("time", { required: true })} className="py-2.5 px-3 text-[11px]" />
              </div>

              <Input label="Venue" {...register("locationName", { required: true })} placeholder="The Plaza" className="py-2.5 px-3 text-[11px]" />
              <Input label="Address" {...register("locationDetails")} placeholder="123 Street" className="py-2.5 px-3 text-[11px]" />
              
              <Textarea label="Message" {...register("message")} placeholder="We'd love to have you..." className="min-h-[60px] py-2.5 px-3 text-[11px]" />

              {flow === "personalized" && (
                <Input label="Guest Name" {...register("guest")} placeholder="Enter name" className="py-2.5 px-3 text-[11px]" />
              )}
            </form>
          </div>
        </div>

        {/* Compact Footer */}
        <div className="p-3 border-t border-slate-50 shrink-0 bg-white">
          <Button onClick={handleSubmit(onSubmit)} isLoading={isSubmitting} className="w-full py-4 rounded-lg shadow-lg text-[9px] uppercase font-black tracking-widest">
            Generate Invitation
          </Button>
        </div>
      </div>

      {/* Main Preview Area - ULTRA ICON DENSE */}
      <div className="hidden md:flex flex-1 h-screen items-center justify-center p-6 bg-[#fffcf9] bg-texture-paper relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-rose-50 rounded-full blur-[80px] opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* MASSIVE ICON DECORATION */}
        <div className="absolute inset-0 pointer-events-none">
          <Heart className="absolute top-10 left-10 text-rose-100 w-12 h-12 rotate-12 animate-float" />
          <Star className="absolute top-20 right-20 text-amber-100 w-8 h-8 -rotate-12 animate-float" />
          <Music className="absolute bottom-20 left-20 text-slate-100 w-10 h-10 rotate-6 animate-float" />
          <Gift className="absolute bottom-10 right-10 text-purple-100 w-14 h-14 -rotate-6 animate-float" />
          <Camera className="absolute top-1/2 left-5 text-blue-50 w-6 h-6 animate-float" />
          <Bell className="absolute top-1/3 right-[5%] text-amber-50 w-5 h-5 animate-float" />
          <Gem className="absolute bottom-1/3 left-[20%] text-rose-50 w-7 h-7 animate-float" />
          <GlassWater className="absolute top-1/4 right-[25%] text-blue-50 w-6 h-6 animate-float" />
          <PartyPopper className="absolute bottom-1/4 right-[15%] text-amber-50 w-8 h-8 animate-float" />
          <Sparkles className="absolute top-1/2 right-[10%] text-rose-50 w-4 h-4 animate-pulse-slow" />
        </div>

        <div className="relative z-10 w-full max-w-[320px] h-[640px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl ring-1 ring-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-b-2xl z-30" />
          <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative">
            <div className="absolute inset-0 overflow-y-auto no-scrollbar pt-4">
               <div className="scale-[0.75] h-full origin-top">
                  <MiniInvitePreview theme={selectedTheme} data={formData} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CreatePage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center bg-white"><div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin" /></div>}>
      <CreateForm />
    </Suspense>
  );
}
