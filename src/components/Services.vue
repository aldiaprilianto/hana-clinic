<template>
  <section id="services" class="py-24 bg-secondary">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20">
        <h3 class="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Our Expertise</h3>
        <h2 class="text-4xl md:text-5xl font-serif text-dark">Korean Beauty Treatments</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service 1: Korean Skin Aesthetic (PRIMARY) -->
        <div id="skin-aesthetic" class="group bg-white p-6 rounded-2xl text-center cursor-pointer relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="mb-8 overflow-hidden rounded-xl relative aspect-[4/3]">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500"></div>
            <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" alt="Korean Skin Aesthetic" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0">
          </div>
          
          <h3 class="text-2xl font-serif mb-4 text-primary group-hover:text-accent transition-colors">Korean Skin Aesthetic</h3>
          <p class="text-gray-500 leading-relaxed mb-6 font-light text-sm">Advanced Korean lifting treatments including Ultherapy, Thermage FLX, and premium Skin Boosters for radiant, youthful skin.</p>
          
          <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 group-hover:text-accent transition-colors">
            <span>Learn More</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>

        <!-- Service 2: Anti-Aging Dermatology (SECONDARY) -->
        <div id="dermatology" class="group bg-white p-6 rounded-2xl text-center cursor-pointer relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="mb-8 overflow-hidden rounded-xl relative aspect-[4/3]">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500"></div>
            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" alt="Anti-Aging Dermatology" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0">
          </div>
          
          <h3 class="text-2xl font-serif mb-4 text-primary group-hover:text-accent transition-colors">Anti-Aging Dermatology</h3>
          <p class="text-gray-500 leading-relaxed mb-6 font-light text-sm">Comprehensive anti-aging solutions with Korean technology, from injectables to advanced laser treatments.</p>
          
          <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 group-hover:text-accent transition-colors">
            <span>Learn More</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>

        <!-- Service 3: Aesthetic Dentistry (MINIMAL) -->
        <div id="dentistry" class="group bg-white p-6 rounded-2xl text-center cursor-pointer relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="mb-8 overflow-hidden rounded-xl relative aspect-[4/3]">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500"></div>
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074&auto=format&fit=crop" alt="Aesthetic Dentistry" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0">
          </div>
          
          <h3 class="text-2xl font-serif mb-4 text-primary group-hover:text-accent transition-colors">Aesthetic Dentistry</h3>
          <p class="text-gray-500 leading-relaxed mb-6 font-light text-sm">Complete your beauty transformation with our smile design services.</p>
          
          <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 group-hover:text-accent transition-colors">
            <span>Learn More</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
