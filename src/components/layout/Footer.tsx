export function Footer() {
  return (
    <footer className="bg-surface pt-section-gap pb-20 border-t border-outline-variant/20">
      <div className="flex flex-col items-center text-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
        <div className="font-display-lg text-headline-xl md:text-[180px] text-on-surface mb-24 tracking-tighter opacity-5 select-none pointer-events-none">Rent-A-Grandma.ai</div>
        <div className="flex flex-wrap justify-center gap-16 mb-32">
          {["Philosophy", "Safety", "Careers", "Privacy", "Terms"].map((item) => (
            <a key={item} className="text-on-surface-variant/60 font-body-md hover:text-primary transition-all relative group uppercase tracking-widest text-xs" href="#">
              {item}
              <span className="absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full pt-16 border-t border-outline-variant/10 gap-10">
          <p className="font-body-md text-secondary opacity-40 text-xs tracking-widest uppercase italic">© 2024 Rent-A-Grandma.ai — Modern Wisdom, Traditional Warmth.</p>
          <div className="flex gap-12">
            <span className="material-symbols-outlined text-outline/30 cursor-pointer hover:text-primary transition-colors text-3xl font-thin">brand_family</span>
            <span className="material-symbols-outlined text-outline/30 cursor-pointer hover:text-primary transition-colors text-3xl font-thin">volunteer_activism</span>
            <span className="material-symbols-outlined text-outline/30 cursor-pointer hover:text-primary transition-colors text-3xl font-thin">nest_eco_leaf</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
