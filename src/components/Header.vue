<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="[
    'fixed w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
  ]">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center">
        <a href="#" class="flex items-center gap-2">
          <img src="/images/logo.png" alt="Hana Clinic Logo" class="h-12 w-auto" />
        </a>
      </div>
      
      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center space-x-8">
        <a href="#" :class="['hover:text-accent transition-colors uppercase text-xs tracking-[0.2em] font-medium', isScrolled ? 'text-dark' : 'text-primary']">Home</a>
        <a href="#services" :class="['hover:text-accent transition-colors uppercase text-xs tracking-[0.2em] font-medium', isScrolled ? 'text-dark' : 'text-primary']">Services</a>
        <a href="#about" :class="['hover:text-accent transition-colors uppercase text-xs tracking-[0.2em] font-medium', isScrolled ? 'text-dark' : 'text-primary']">About</a>
        <a href="#testimonials" :class="['hover:text-accent transition-colors uppercase text-xs tracking-[0.2em] font-medium', isScrolled ? 'text-dark' : 'text-primary']">Stories</a>
        <a href="#contact" class="bg-primary text-white px-6 py-2.5 hover:bg-dark transition-all duration-300 uppercase text-xs tracking-[0.2em] font-medium rounded-full shadow-md hover:shadow-lg">Book Now</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" :class="['md:hidden focus:outline-none', isScrolled ? 'text-dark' : 'text-primary']">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-white absolute w-full shadow-lg border-t border-gray-100">
        <div class="flex flex-col px-6 py-6 space-y-4">
          <a href="#" class="text-dark hover:text-primary uppercase text-xs tracking-[0.2em] font-medium">Home</a>
          <a href="#services" class="text-dark hover:text-primary uppercase text-xs tracking-[0.2em] font-medium">Services</a>
          <a href="#about" class="text-dark hover:text-primary uppercase text-xs tracking-[0.2em] font-medium">About</a>
          <a href="#testimonials" class="text-dark hover:text-primary uppercase text-xs tracking-[0.2em] font-medium">Stories</a>
          <a href="#contact" class="bg-primary text-white px-6 py-3 text-center hover:bg-dark uppercase text-xs tracking-[0.2em] font-medium">Book Now</a>
        </div>
      </div>
    </transition>
  </header>
</template>
