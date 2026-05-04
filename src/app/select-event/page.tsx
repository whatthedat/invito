import Link from "next/link";
import { 
  Heart, Home as HomeIcon, Cake, Gem, ArrowLeft, ArrowRight, 
  Music, Star, Gift, PartyPopper, Bell, Sparkles, Camera, GlassWater 
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default async function SelectEventPage({
  searchParams,
}: {
  searchParams: Promise<{ flow?: string }>;
}) {
  const params = await searchParams;
  const flow = params.flow || "common";

  const events = [
    { id: "wedding", name: "Wedding", icon: Heart, bg: "bg-rose-50", color: "text-rose-600" },
    { id: "engagement", name: "Engagement", icon: Gem, bg: "bg-purple-50", color: "text-purple-600" },
    { id: "housewarming", name: "Housewarming", icon: HomeIcon, bg: "bg-emerald-50", color: "text-emerald-700" },
    { id: "birthday", name: "Birthday", icon: Cake, bg: "bg-amber-50", color: "text-amber-600" },
  ];

  return (
    <div className="min-h-screen bg-[#fffcf9] bg-texture-paper flex flex-col p-4 md:p-8 relative overflow-x-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-rose-50 rounded-full blur-[80px] opacity-30" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-30" />

      {/* ICON CLUSTERS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Heart className="absolute top-20 left-[10%] text-rose-100 w-8 h-8 rotate-12 animate-float" />
        <Music className="absolute top-40 right-[15%] text-blue-50 w-6 h-6 -rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        <Star className="absolute bottom-40 left-[15%] text-amber-100 w-5 h-5 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        <Gift className="absolute bottom-20 right-[10%] text-purple-100 w-7 h-7 -rotate-6 animate-float" style={{ animationDelay: '3s' }} />
        <Sparkles className="absolute top-1/2 left-[5%] text-rose-100 w-4 h-4 animate-pulse-slow" />
        <Camera className="absolute top-1/3 right-[5%] text-slate-100 w-5 h-5 animate-float" />
        <GlassWater className="absolute bottom-1/4 left-[5%] text-blue-50 w-6 h-6 animate-float" />
        <Bell className="absolute top-10 right-[25%] text-amber-50 w-4 h-4 animate-float" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between py-4 animate-fade-in">
        <Link href="/">
          <Button variant="ghost" size="sm" className="font-bold uppercase tracking-widest text-[9px] h-auto p-2">
            <ArrowLeft className="w-3 h-3 mr-2" /> Back
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center text-white font-serif text-xs italic shadow-lg">I</div>
          <span className="text-xs font-serif font-bold tracking-tighter uppercase">INVITO</span>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto py-6 animate-slide-up">
        <div className="mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
             <Sparkles className="w-3 h-3 text-amber-400" />
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Choose Occasion</span>
             <Sparkles className="w-3 h-3 text-amber-400" />
          </div>
          <h1 className="text-display text-3xl md:text-5xl mb-3">
            What are we <span className="italic text-rose-500/80">celebrating?</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto font-medium flex items-center justify-center gap-2">
            <PartyPopper className="w-4 h-4 text-amber-200" />
            Discover bespoke designs for your special day.
            <Heart className="w-4 h-4 text-rose-200" />
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl mx-auto">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/create?flow=${flow}&type=${event.id}`}
              className="group"
            >
              <Card className="relative p-6 md:p-8 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-none bg-white overflow-hidden ring-1 ring-black/5">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110", event.bg, event.color)}>
                  <event.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                   {event.name}
                   <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-300" />
                </h3>
                <div className="flex items-center gap-1 text-[8px] font-black uppercase tracking-widest text-slate-300 group-hover:text-black transition-colors">
                  Select <ArrowRight className="w-3 h-3" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <footer className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-center py-6 border-t border-black/5 mt-8 text-slate-400 text-[8px] font-bold uppercase tracking-[0.3em]">
        <Gift className="w-3 h-3 mr-2 text-rose-200" />
        © 2026 Invito Studio
        <Music className="w-3 h-3 ml-2 text-blue-200" />
      </footer>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
