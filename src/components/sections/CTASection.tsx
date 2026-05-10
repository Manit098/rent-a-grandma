"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTASection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover opacity-70 mix-blend-luminosity scale-110 transition-transform duration-[20s] hover:scale-100" alt="Soup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1sbO40vahfD7o2KaAzhIbzNahvDZOWYPeUAyjukJGH5ZgP720Kkl9UVASIGGO6ELmav8v9VTN0b3T3sLPChf_4OGvZX4quQinqyD1RMYdcXWD5zIKQxwzUkQECaqdPqiNVt0tRoHuaSvsi3X18HUQOS5LQDDvj2Dekvfh46M6l6DrbkZdzL6RY9iPoptuXkiW_4B9yE-oKUe5q-fpWkx3gAUhss6fCs_7g6zuEUrF7B5a6XW9J782ZzkYdOObAJKNjgzR-Iv0AXs"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_300px_rgba(0,0,0,0.8)]"></div>
      </div>
      <div className="relative z-10 px-margin-mobile stagger-reveal">
        <h2 className="font-display-xl text-display-lg md:text-[160px] mb-16 text-white leading-[0.7] tracking-tighter">
          <span className="reveal-1">She</span> <br/>
          <span className="reveal-2">already</span> <br/>
          <span className="reveal-3">made</span> <br/>
          <span className="reveal-4">soup.</span>
        </h2>
        <MagneticButton className="pulse-heart bg-white text-black px-24 py-12 rounded-full font-display-lg text-4xl shadow-[0_0_100px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-all duration-1000">
          Come home
        </MagneticButton>
        <p className="font-body-lg mt-16 text-white/40 tracking-[0.4em] uppercase text-[10px] font-bold">Don't let it get cold. You know how she gets.</p>
      </div>
    </section>
  );
}
