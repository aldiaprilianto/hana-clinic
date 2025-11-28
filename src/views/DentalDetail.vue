<script setup>
import { dentalTreatments } from '../Data/treatmentData.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToTreatment = (treatmentId) => {
  router.push(`/treatment/${treatmentId}`)
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Header -->
    <header class="relative bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-32 overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <router-link to="/" class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group">
          <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span class="text-sm uppercase tracking-widest">Back to Home</span>
        </router-link>
        
        <div class="max-w-4xl">
          <div class="inline-block bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span class="text-accent text-sm font-bold uppercase tracking-wider">12 Comprehensive Services</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight">Dental Treatment</h1>
          <p class="text-xl text-white/90 max-w-2xl leading-relaxed">Complete dental care solutions from aesthetic dentistry to advanced oral surgery for your healthiest, most beautiful smile</p>
        </div>
      </div>
      
      <!-- Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </header>

    <!-- Treatments Grid -->
    <div class="container mx-auto px-6 py-20">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-serif text-primary mb-4">Our Dental Services</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">From routine care to advanced procedures, we offer comprehensive dental services to keep your smile healthy and beautiful</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="treatment in dentalTreatments"
          :key="treatment.id"
          @click="navigateToTreatment(treatment.id)"
          class="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-500 cursor-pointer border border-gray-100 hover:border-accent/30 transform hover:-translate-y-1"
        >
          <!-- Image -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10"></div>
            <img 
              :src="treatment.image" 
              :alt="treatment.name"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0"
            >
            
            <!-- Hover Icon -->
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-serif text-primary mb-3 group-hover:text-accent transition-colors duration-300">{{ treatment.name }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{{ treatment.shortDescription }}</p>
            
            <!-- CTA -->
            <div class="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 group-hover:text-accent transition-colors font-semibold">
              <span>Learn More</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-20 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-4xl font-serif mb-6">Ready for Your Best Smile?</h2>
        <p class="text-white/90 mb-10 max-w-2xl mx-auto text-lg">Schedule your dental consultation today and take the first step towards optimal oral health</p>
        <a href="/#contact" class="inline-block bg-accent text-primary px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_40px_rgba(197,160,89,0.6)] hover:scale-105">
          Book Appointment
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
