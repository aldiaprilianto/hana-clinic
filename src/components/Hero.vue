<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden hero-mesh">
    <!-- Animated Particles/Glow -->
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-glow"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-glow delay-1000"></div>

    <div class="container mx-auto px-6 relative z-10 text-center pt-20">
      <div class="glass inline-block px-6 py-2 rounded-full mb-8 animate-slide-up border-primary/10">
        <h2 class="text-xs md:text-sm uppercase tracking-[0.3em] text-primary/80">Excellence & Precision</h2>
      </div>
      
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight animate-slide-up delay-100 text-dark">
        Cosmetic & <br/>
        <span class="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Aesthetic Dentistry</span>
      </h1>
      
      <p class="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light text-gray-600 leading-relaxed animate-slide-up delay-200 backdrop-blur-sm p-4 rounded-xl border border-white/40 bg-white/30">
        Experience the perfect blend of art and science. We are dedicated to enhancing your natural beauty with minimally invasive treatments.
      </p>
      
      <div class="animate-slide-up delay-300 flex justify-center gap-6">
        <a href="#contact" class="bg-primary text-white px-10 py-4 hover:bg-dark transition-all duration-300 uppercase tracking-[0.2em] text-xs font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105">
          Book Appointment
        </a>
        <a href="#services" class="px-10 py-4 text-primary hover:text-accent transition-all duration-300 uppercase tracking-[0.2em] text-xs font-medium flex items-center gap-2 group">
          <span>Explore Services</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
    
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
      <div class="glass p-3 rounded-full border-primary/10 text-primary/50">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}
</style>
