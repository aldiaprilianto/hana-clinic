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
    'fixed w-full z-50 transition-all duration-500',
    isScrolled ? 'glass py-4' : 'bg-transparent py-6'
  ]">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center gap-2 group">
          <!-- Logo Image -->
          <img src="/images/logo.png" alt="Hana Clinic Logo" class="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
        </router-link>
      </div>
      
      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center space-x-8">
        <a href="#" class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300">Home</a>
        <a href="#skin-aesthetic" class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300">Skin Aesthetic</a>
        <a href="#equipment" class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300">Technology</a>
        <a href="#about" class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300">About</a>
        <a href="#contact" class="btn-primary ml-4">
          Book Appointment
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-primary focus:outline-none hover:text-accent transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-lg">
        <div class="flex flex-col px-6 py-8 space-y-6">
          <a href="#" class="text-primary/80 hover:text-accent uppercase text-sm tracking-[0.15em] font-medium transition-colors">Home</a>
          <a href="#skin-aesthetic" class="text-primary/80 hover:text-accent uppercase text-sm tracking-[0.15em] font-medium transition-colors">Skin Aesthetic</a>
          <a href="#equipment" class="text-primary/80 hover:text-accent uppercase text-sm tracking-[0.15em] font-medium transition-colors">Technology</a>
          <a href="#about" class="text-primary/80 hover:text-accent uppercase text-sm tracking-[0.15em] font-medium transition-colors">About</a>
          <a href="#contact" class="btn-primary text-center w-full">Book Now</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -4px;
  left: 0;
  background-color: #C5A059;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.btn-primary {
  @apply bg-accent text-primary px-6 py-2.5 uppercase text-xs tracking-[0.2em] font-bold rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)];
}
</style>
