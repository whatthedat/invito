import Link from "next/link";
import { 
  Sparkles, Users, ArrowRight, Heart, Mail, 
  Home as HomeIcon, Cake, Star, Music, Gift, 
  GlassWater, PartyPopper, Gem, Bell, Camera,
  MapPin, Coffee, Utensils
} from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcf9] bg-texture-paper flex flex-col p-4 md:p-6 relative overflow-x-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-50 rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* DENSE DECORATIVE ICON CLUSTERS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Left Cluster */}
        <Heart className="absolute top-12 left-[5%] text-rose-200 w-8 h-8 rotate-12 animate-float" />
        <Star className="absolute top-24 left-[12%] text-amber-200 w-4 h-4 -rotate-12 animate-float" style={{ animationDelay: '0.5s' }} />
        <Music className="absolute top-36 left-[8%] text-slate-100 w-5 h-5 rotate-6 animate-float" style={{ animationDelay: '1.2s' }} />
        <Sparkles className="absolute top-48 left-[15%] text-rose-100 w-3 h-3 animate-pulse-slow" />
        
        {/* Top Right Cluster */}
        <HomeIcon className="absolute top-16 right-[8%] text-blue-100 w-7 h-7 -rotate-12 animate-float" style={{ animationDelay: '1.5s' }} />
        <Gem className="absolute top-32 right-[15%] text-purple-100 w-5 h-5 rotate-12 animate-float" style={{ animationDelay: '0.8s' }} />
        <Bell className="absolute top-48 right-[10%] text-amber-100 w-4 h-4 -rotate-6 animate-float" style={{ animationDelay: '2s' }} />
        <Camera className="absolute top-64 right-[18%] text-slate-100 w-5 h-5 animate-float" style={{ animationDelay: '1.1s' }} />

        {/* Bottom Left Cluster */}
        <Cake className="absolute bottom-20 left-[8%] text-purple-200 w-9 h-9 rotate-6 animate-float" style={{ animationDelay: '2.5s' }} />
        <Gift className="absolute bottom-36 left-[15%] text-rose-100 w-6 h-6 -rotate-12 animate-float" style={{ animationDelay: '1.7s' }} />
        <GlassWater className="absolute bottom-48 left-[5%] text-blue-100 w-5 h-5 rotate-12 animate-float" style={{ animationDelay: '0.3s' }} />
        <PartyPopper className="absolute bottom-10 left-[18%] text-amber-100 w-5 h-5 animate-float" style={{ animationDelay: '3s' }} />

        {/* Bottom Right Cluster */}
        <Heart className="absolute bottom-16 right-[12%] text-rose-100 w-5 h-5 rotate-[30deg] animate-float" style={{ animationDelay: '2.2s' }} />
        <Star className="absolute bottom-32 right-[5%] text-blue-100 w-7 h-7 -rotate-12 animate-float" style={{ animationDelay: '1.4s' }} />
        <Coffee className="absolute bottom-48 right-[15%] text-slate-100 w-6 h-6 rotate-12 animate-float" style={{ animationDelay: '0.9s' }} />
        <Utensils className="absolute bottom-60 right-[8%] text-rose-50 w-4 h-4 animate-float" style={{ animationDelay: '2.8s' }} />

        {/* Middle Scattered Icons */}
        <Sparkles className="absolute top-1/2 left-[3%] text-amber-100 w-4 h-4 animate-pulse-slow" />
        <Music className="absolute top-1/3 right-[3%] text-blue-50 w-5 h-5 animate-float" style={{ animationDelay: '2s' }} />
        <Star className="absolute bottom-1/3 left-[20%] text-purple-50 w-3 h-3 animate-pulse-slow" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between py-2 md:py-4 animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center text-white font-serif text-base italic shadow-lg">I</div>
          <span className="text-base font-serif font-bold tracking-tighter">INVITO</span>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
          <Link href="#" className="hover:text-black transition-colors">Templates</Link>
          <Link href="#" className="px-4 py-1.5 bg-black text-white rounded-full text-[9px] hover:scale-105 transition-transform">Sign In</Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto py-8 md:py-12 animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/5 text-rose-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
          <Sparkles className="w-3 h-3 fill-current" /> 
          <span>Handcrafted Digital Invitations</span>
          <Sparkles className="w-3 h-3 fill-current" />
        </div>

        <h1 className="text-display text-4xl md:text-6xl mb-4 leading-tight">
          Celebrate life <br className="md:hidden" />
          <span className="italic">beautifully.</span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-500 mb-10 max-w-xl mx-auto font-medium leading-relaxed opacity-80 flex items-center justify-center gap-3">
          <Star className="w-4 h-4 text-amber-200" />
          Create premium invitations for all your special moments.
          <Heart className="w-4 h-4 text-rose-200" />
        </p>

        {/* Action Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl mx-auto">
          <Link href="/select-event?flow=personalized" className="group">
            <Card className="p-6 md:p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-none bg-white relative overflow-hidden ring-1 ring-black/5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50/50 rounded-full blur-2xl -mr-12 -mt-12" />
              <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-serif font-bold mb-2 text-slate-900 flex items-center gap-2">
                  Personalized <Heart className="w-4 h-4 text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
                <p className="text-slate-500 text-xs leading-relaxed font-medium mb-6">
                  Unique links for each guest with their name.
                </p>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-900">
                  Start <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/select-event?flow=common" className="group">
            <Card className="p-6 md:p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-none bg-white relative overflow-hidden ring-1 ring-black/5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-full blur-2xl -mr-12 -mt-12" />
              <div className="w-10 h-10 bg-slate-100 text-slate-900 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-serif font-bold mb-2 text-slate-900 flex items-center gap-2">
                  Common Link <Star className="w-4 h-4 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
                <p className="text-slate-500 text-xs leading-relaxed font-medium mb-6">
                  One beautiful link for groups.
                </p>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-900">
                  Select <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Card>
          </Link>
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
