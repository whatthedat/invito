"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Share2, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { getThemeById, EventType } from "@/lib/themes";
import { LoadingScreen } from "@/components/LoadingScreen";
import { TemplateRenderer } from "@/components/TemplateRenderer";

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'You are invited!',
          text: 'Check out this invitation',
          url: window.location.href,
        });
      } catch (err) {
        if ((err as Error).name !== "AbortError") fallbackCopy();
      }
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="fixed bottom-8 right-8 bg-black text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center z-50 group border border-white/20"
      aria-label="Share Invite"
    >
      {copied ? <Check className="w-6 h-6" /> : <Share2 className="w-6 h-6" />}
      <span className="absolute bottom-full right-0 mb-4 bg-slate-900 text-white text-xs px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium shadow-2xl">
        {copied ? "Copied Link!" : "Share Invitation"}
      </span>
    </button>
  );
};

const MapButton = ({ link }: { link: string }) => {
  if (!link) return null;
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer" 
      className="fixed bottom-8 left-8 bg-white/90 backdrop-blur-xl text-black px-8 py-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center z-50 group border border-slate-200 font-bold gap-3"
    >
      <MapPin className="w-6 h-6 text-red-500" />
      <span className="hidden md:inline">Open in Maps</span>
      <span className="md:hidden text-sm uppercase tracking-tighter">Location</span>
      <ExternalLink className="w-4 h-4 text-slate-400" />
    </a>
  );
};

function InviteContent() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  
  const type = (searchParams.get("type") as EventType) || "wedding";
  const templateId = searchParams.get("templateId") || "wedding-royal";
  const guestName = searchParams.get("guest");

  const data: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (!["type", "flow", "templateId", "guest"].includes(key)) {
      data[key] = value;
    }
  });

  const theme = getThemeById(templateId);

  useEffect(() => {
    // Artificial delay for loading screen
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen eventType={type} />;
  if (!theme) return <div className="min-h-screen flex items-center justify-center font-serif text-2xl">Theme not found</div>;

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <TemplateRenderer 
        theme={theme} 
        data={data} 
        guestName={guestName} 
      />
      
      <MapButton link={data.googleMapsLink} />
      <ShareButton />
    </div>
  );
}

export default function InvitePage() {
  return (
    <Suspense fallback={<LoadingScreen eventType="wedding" />}>
      <InviteContent />
    </Suspense>
  );
}
