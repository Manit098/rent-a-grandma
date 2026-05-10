"use client";

import { useTooltip } from "@/context/TooltipContext";

export function MatriarchsSection() {
  const { showTooltip, hideTooltip } = useTooltip();

  return (
    <section className="bg-surface relative z-10 py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-baseline gap-10">
          <div className="max-w-2xl">
            <span className="font-label-sm text-secondary uppercase tracking-[0.4em] block mb-10 opacity-60">The Lineup</span>
            <h2 
              className="font-display-lg text-display-lg leading-none tracking-tighter"
              onMouseEnter={showTooltip}
              onMouseLeave={hideTooltip}
            >
              Curated Matriarchs.
            </h2>
          </div>
          <p className="font-body-lg text-on-surface-variant max-w-sm italic opacity-60">Selected for their unique capacity to nurture through judgment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-y-64">
          {/* Nonna Isabella - Large Vertical */}
          <div 
            className="md:col-span-7 editorial-card relative"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
          >
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <img className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" alt="Nonna Isabella" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8mabNNsx7D_VpY3OwIIAjT2WsEaMrt9C2UF5QdVc-30X_7wDqyyZfhrfZBC3JIdZRk85cuATnZB5f-JzBOA7CNvuQersro4l7xH6nK6jVP1NfoCFPxzttD-5wNLv9QTWa4lr-r8ZN_LmN3rOloQi9gWvt_MlDlIlVP27AUxL0pmnCh6QJCxLM1v8QQsypHhtYB2ZlegNNhjKNzRq1OAFSH8M9L87nI3Cof0-mLAJPExdE32lI84N19uFhubT6pd_N7thbg4oTvA4"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <h3 className="font-display-lg text-5xl mb-3">Nonna Isabella</h3>
                <p className="font-label-sm opacity-50 uppercase tracking-[0.2em] text-xs">Traditional Flour-on-Hands</p>
              </div>
            </div>
            <div className="mt-12 max-w-lg">
              <p className="font-headline-lg italic text-on-surface leading-tight mb-8">"If you don't eat this second helping, you're dead to me. But I love you."</p>
              <div className="glass-player flex items-center justify-between p-6 rounded-full border border-outline-variant/30 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-lg hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </button>
                  <span className="font-label-sm uppercase tracking-widest text-xs opacity-60">Voice Profile</span>
                </div>
                <span className="text-xs italic text-outline font-medium">"She actually made me weep." — Tim</span>
              </div>
            </div>
          </div>

          {/* Dot Matrix - Floating Overlap */}
          <div 
            className="md:col-span-5 md:mt-48 editorial-card group relative"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
          >
            <div className="aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative md:-ml-12 z-10 border-[12px] border-surface">
              <img className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" alt="Dot Matrix" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqmUe1pXxSVtRN1mn_V8m9DT-aopulC3UrqE9AV3ZyPzb3G1wSPsyjhnEkcKLd1aRneFy17sBf3kd9dFBoIXJpGiRX35DNo04PLw_eroUmYg7C4RsV7Tn8V7xBhuEgXV4k7xlczk_Uu9m82iHD6zkwQJypVV4G1lQx72up7Zq87DEkFAL_-ws1pOTiWcmGy_SSsuzBaN-QTwpRwW0MS_iH2MNu-hKhsTdb_G2lyzlaW7LuQx1BGO28O1A5DqAb00BXT35Q_XKvBAk"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="font-headline-lg mb-2">Dot Matrix</h3>
                <p className="font-label-sm opacity-60 uppercase tracking-widest text-xs">The Code Cracker</p>
              </div>
            </div>
            <div className="mt-12 px-6">
              <p className="font-body-lg text-on-surface-variant italic mb-8 border-l-2 border-secondary/20 pl-6">"Your password is your pet's name. You're an embarrassment to the family subnet."</p>
            </div>
          </div>

          {/* Dadi Ji - Offset Row */}
          <div 
            className="md:col-start-2 md:col-span-4 editorial-card"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img className="w-full h-full object-cover" alt="Dadi Ji" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMsfWMzI5DExzNchUsycEUE9fRV3orEK3TMppvh5iwDzZITzhv3MbsXQNbKfRpEjF4HIXl9LecVOkuSwIpx9FXHFDTV5BSzDQvdrJ4cp9fj1eOj-eq1LbVtIkoBcdYsw7K76Si9WX0k3bMd9OdcanFSHKaySp9H0fGH4YLd8ECk9njjv4NF5KhTEqHzra_nMdjW92ooZ-SbFvWKOUroZ_RrrOSTlXEWt4UpUoASTuyBuAzVMfPswJ03gJ4nEL-cb4mfj8rmuONs8U"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-headline-lg">Dadi Ji</h3>
              </div>
            </div>
            <p className="mt-8 font-body-md text-on-surface-variant italic">"Sharma's son just became a billionaire. And you... you have a podcast?"</p>
          </div>

          {/* Ama - Cinematic Wide */}
          <div 
            className="md:col-span-6 md:mt-24 editorial-card"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
          >
            <div className="aspect-video md:aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img className="w-full h-full object-cover" alt="Ama" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMtjtQUrbivnQE0d7YrNvjbRT_bsBBvxs6afFNj0ckIiQsqS7AFajCdxj7hOm186EjjX-7adMTmExivNdD-fhQm87yLNYLOC5aV6Y3OGEbi0Z5ObTh7V_1vyCdTnyXBVeK9NKMARjz1JEoeh7h19hZZo8y4Mc1mfp347Aw3u0Aq3fs3_cSVR5_NuTYtaP6RguuJaWTo3_JW2rQJODkYcKyYrIc7iKQcy9ZJ9eboKYfXcPicJcsa8pz14pxtVa9I0YQh6ksjQfRFrs"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="font-headline-lg">Ama</h3>
                <p className="font-label-sm opacity-60">Zen &amp; Ginger Tea</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
