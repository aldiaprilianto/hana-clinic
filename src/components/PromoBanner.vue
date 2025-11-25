<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const promos = [
  {
    title: 'Special Ultherapy Promotion',
    subtitle: 'Premium Korean Lifting Treatment',
    discount: 'Up to 30% OFF',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop',
    cta: 'Book Now'
  },
  {
    title: 'Thermage FLX Package',
    subtitle: 'Advanced Radiofrequency Lifting',
    discount: 'Limited Time Offer',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
    cta: 'Learn More'
  },
  {
    title: 'Korean Skin Booster',
    subtitle: 'Radiant Glow Treatment',
    discount: 'First Session 20% OFF',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop',
    cta: 'Get Started'
  }
]

let slideInterval = null
let touchStartX = 0
let touchEndX = 0

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % promos.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? promos.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  if (touchStartX - touchEndX > 50) {
    nextSlide()
  }
  if (touchEndX - touchStartX > 50) {
    prevSlide()
  }
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script>

<template>
  <section class="py-16 bg-gradient-to-r from-surface via-white to-surface overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="relative" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <!-- Slides Container -->
        <div class="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <div 
            v-for="(promo, index) in promos" 
            :key="index"
            class="absolute inset-0 transition-all duration-700 ease-in-out"
            :class="currentSlide === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'"
          >
            <!-- Background Image -->
            <img :src="promo.image" :alt="promo.title" class="w-full h-full object-cover" />
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
            
            <!-- Content -->
            <div class="absolute inset-0 flex items-center">
              <div class="container mx-auto px-12">
                <div class="max-w-2xl">
                  <p class="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-bold">{{ promo.discount }}</p>
                  <h2 class="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">{{ promo.title }}</h2>
                  <p class="text-xl text-white/90 mb-8 font-light">{{ promo.subtitle }}</p>
                  <a href="#contact" class="inline-block bg-accent text-white px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    {{ promo.cta }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button 
          @click="prevSlide" 
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all z-10"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          @click="nextSlide" 
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all z-10"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Dots Indicator -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          <button 
            v-for="(promo, index) in promos" 
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-white w-8' : 'bg-white/50'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>
