<template>
  <section id="services" class="py-24 bg-secondary">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20">
        <h3 class="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Our Expertise</h3>
        <h2 class="text-4xl md:text-5xl font-serif text-dark">Crafted for You</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="group bg-white p-6 rounded-2xl text-center cursor-pointer relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="mb-8 overflow-hidden rounded-xl relative aspect-[4/3]">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500"></div>
            <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop" alt="Cosmetic Dentistry" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0">
          </div>
          
          <h3 class="text-2xl font-serif mb-4 text-primary group-hover:text-accent transition-colors">Cosmetic Dentistry</h3>
          <p class="text-gray-500 leading-relaxed mb-6 font-light text-sm">Transform your smile with veneers, whitening, and bonding. We design smiles that look natural and radiant.</p>
          
          <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 group-hover:text-accent transition-colors">
            <span>Learn More</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="group bg-white p-6 rounded-2xl text-center cursor-pointer relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="mb-8 overflow-hidden rounded-xl relative aspect-[4/3]">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500"></div>
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" alt="Restorative Dentistry" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0">
          </div>
          
          <h3 class="text-2xl font-serif mb-4 text-primary group-hover:text-accent transition-colors">Restorative Care</h3>
          <p class="text-gray-500 leading-relaxed mb-6 font-light text-sm">Repair and restore your teeth with biomimetic techniques that preserve your natural tooth structure.</p>
          
          <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 group-hover:text-accent transition-colors">
            <span>Learn More</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="group bg-white p-6 rounded-2xl text-center cursor-pointer relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="mb-8 overflow-hidden rounded-xl relative aspect-[4/3]">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500"></div>
            <img src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop" alt="General Dentistry" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0">
          </div>
          
          <h3 class="text-2xl font-serif mb-4 text-primary group-hover:text-accent transition-colors">General Health</h3>
          <p class="text-gray-500 leading-relaxed mb-6 font-light text-sm">Comprehensive checkups and hygiene services to maintain your oral health and prevent future issues.</p>
          
          <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 group-hover:text-accent transition-colors">
            <span>Learn More</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
