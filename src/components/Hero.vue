<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentBg = ref(0)
const backgrounds = [
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop', // Korean skincare
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop', // Facial treatment
  'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=2070&auto=format&fit=crop', // Beauty spa
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2070&auto=format&fit=crop'  // Aesthetic clinic
]

let bgInterval = null

onMounted(() => {
  bgInterval = setInterval(() => {
    currentBg.value = (currentBg.value + 1) % backgrounds.length
  }, 5000) // Change every 5 seconds
})

onUnmounted(() => {
  if (bgInterval) clearInterval(bgInterval)
})
</script>

<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image Carousel -->
    <div class="absolute inset-0">
      <div 
        v-for="(bg, index) in backgrounds" 
        :key="index"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="currentBg === index ? 'opacity-30' : 'opacity-0'"
      >
        <img :src="bg" alt="Korean Beauty Treatment" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80"></div>

    <!-- Animated Particles/Glow -->
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-glow"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-glow delay-1000"></div>

    <div class="container mx-auto px-6 relative z-10 text-center pt-20">
      <div class="glass inline-block px-6 py-2 rounded-full mb-8 animate-slide-up border-primary/10">
        <h2 class="text-xs md:text-sm uppercase tracking-[0.3em] text-primary/80">Korean Beauty Technology</h2>
      </div>
      
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight animate-slide-up delay-100 text-dark">
        Advanced Korean <br/>
        <span class="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Skin Aesthetic</span>
      </h1>
      
      <p class="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light text-gray-700 leading-relaxed animate-slide-up delay-200 backdrop-blur-sm p-4 rounded-xl border border-white/40 bg-white/50">
        Experience world-class Korean beauty treatments. From advanced anti-aging procedures to transformative skin rejuvenation with cutting-edge technology.
      </p>
      
      <div class="animate-slide-up delay-300 flex justify-center gap-6">
        <a href="#contact" class="bg-primary text-white px-10 py-4 hover:bg-dark transition-all duration-300 uppercase tracking-[0.2em] text-xs font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105">
          Book Consultation
        </a>
        <a href="#skin-aesthetic" class="px-10 py-4 text-primary hover:text-accent transition-all duration-300 uppercase tracking-[0.2em] text-xs font-medium flex items-center gap-2 group bg-white/50 backdrop-blur-sm rounded-full">
          <span>View Treatments</span>
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
