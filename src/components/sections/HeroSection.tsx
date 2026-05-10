"use client";

import { useTooltip } from "@/context/TooltipContext";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroSection() {
  const { showTooltip, hideTooltip } = useTooltip();

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8mabNNsx7D_VpY3OwIIAjT2WsEaMrt9C2UF5QdVc-30X_7wDqyyZfhrfZBC3JIdZRk85cuATnZB5f-JzBOA7CNvuQersro4l7xH6nK6jVP1NfoCFPxzttD-5wNLv9QTWa4lr-r8ZN_LmN3rOloQi9gWvt_MlDlIlVP27AUxL0pmnCh6QJCxLM1v8QQsypHhtYB2ZlegNNhjKNzRq1OAFSH8M9L87nI3Cof0-mLAJPExdE32lI84N19uFhubT6pd_N7thbg4oTvA4')] bg-cover bg-center opacity-[0.05] scale-105 blur-md"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
        <div className="mote" style={{ left: "15%", animationDuration: "18s" }}></div>
        <div className="mote" style={{ left: "45%", animationDuration: "25s" }}></div>
        <div className="mote" style={{ left: "75%", animationDuration: "22s" }}></div>
      </div>
      {/* Drifting Wisdom */}
      <div className="wisdom-drift" style={{ top: "30%", left: "10%", animationDelay: "0s" }}>* Drink some water *</div>
      <div className="wisdom-drift" style={{ top: "45%", right: "15%", animationDelay: "5s" }}>* Stand up straight *</div>
      <div className="wisdom-drift" style={{ top: "70%", left: "20%", animationDelay: "10s" }}>* Wear your socks *</div>

      <div className="absolute top-[20%] left-[12%] floating-accent hidden xl:block z-20">
        <div className="bg-surface-container/60 backdrop-blur-xl p-5 rounded-xl shadow-2xl border border-white/40 rotate-[-4deg]">
          <span className="material-symbols-outlined text-secondary text-3xl">cookie</span>
          <p className="text-[10px] font-label-sm mt-2 opacity-60">SECRET RECIPE #42</p>
        </div>
      </div>
      <div className="absolute bottom-[25%] right-[14%] floating-accent hidden xl:block z-20" style={{ animationDelay: "-3s" }}>
        <div className="bg-secondary-container/60 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/20 rotate-[6deg]">
          <span className="material-symbols-outlined text-secondary text-3xl">gesture</span>
          <p className="text-[10px] font-label-sm mt-2 opacity-60">HAND-KNIT COMFORT</p>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl stagger-reveal">
        <h1 
          className="font-display-xl text-display-lg md:text-display-xl mb-12 text-on-surface tracking-tight leading-[0.85]"
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          <span className="reveal-1">You</span> <span className="reveal-1">haven't</span> <span className="reveal-2">eaten</span> <span className="reveal-2">properly</span> <span className="reveal-3">in</span> <span className="reveal-4">weeks.</span>
        </h1>
        <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface-variant/70 mb-20 italic font-light tracking-wide reveal-4">
          Now they can tell you.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 reveal-4">
          <MagneticButton className="group relative flex items-center gap-6 bg-primary text-on-primary px-16 py-9 rounded-full font-body-lg text-xl shadow-[0_30px_70px_rgba(40,40,40,0.4)] hover:shadow-[0_45px_90px_rgba(0,0,0,0.5)] transition-all duration-700 overflow-hidden">
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            <span className="material-symbols-outlined relative z-10 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            <span className="relative z-10 flex flex-col items-start leading-tight">
              <span className="text-sm font-label-sm uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Request connection</span>
              <span className="font-semibold tracking-tight">Call Grandma</span>
            </span>
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <span className="material-symbols-outlined text-6xl font-thin">expand_more</span>
      </div>
    </header>
  );
}
