<script setup>
import { dentalCategories } from '../Data/treatmentData.js'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Header -->
    <header class="relative bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-32 overflow-hidden">
      <!-- Batik Pattern Background -->
      <div class="absolute inset-0 opacity-15" style="background-image: url('/images/batik.jpeg'); background-size: auto; background-repeat: repeat; background-position: 0 0;"></div>
      
      <!-- Dark Overlay for Better Text Readability -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
      
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <router-link to="/" class="inline-flex items-center gap-2 text-white hover:text-white mb-8 transition-colors group drop-shadow-lg">
          <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span class="text-sm uppercase tracking-widest font-semibold">{{ $t('common.backToHome') }}</span>
        </router-link>
        
        <div class="max-w-4xl">
          <div class="inline-block bg-accent/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span class="text-white text-sm font-bold uppercase tracking-wider drop-shadow-md">{{ $t('services.dental.services') }}</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{{ $t('services.dental.title') }}</h1>
          <p class="text-xl text-white max-w-2xl leading-relaxed drop-shadow-lg">{{ $t('services.dental.description') }}</p>
        </div>
      </div>
      
      <!-- Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </header>

    <!-- Specialized Services Grid (Aesthetic, Ortho, Endo) -->
    <div class="container mx-auto px-6 py-16">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-serif text-primary mb-4">{{ $t('services.dental.ourServices') }}</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('services.dental.intro') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="category in dentalCategories.slice(0, 3)" :key="category.id" class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
          <!-- Header -->
          <div class="bg-primary py-5 text-center">
            <h3 class="font-serif font-bold text-xl uppercase tracking-wider text-white" style="color: white !important;">{{ category.title }}</h3>
          </div>
          <!-- Content -->
          <div class="p-6 space-y-6 flex-grow bg-surface/30">
            <div v-for="(treatment, index) in category.treatments" :key="index" class="relative group cursor-pointer" @click="router.push(`/treatment/${treatment.id}`)">
              <div class="relative overflow-hidden rounded-xl shadow-md aspect-[4/3] border border-gray-100">
                 <img :src="treatment.image" :alt="treatment.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                 <!-- Gradient Overlay -->
                 <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                 
                 <!-- Label -->
                 <div class="absolute bottom-0 left-0 right-0 p-4 text-center">
                   <span class="text-white font-medium text-sm uppercase tracking-wide drop-shadow-md">{{ treatment.name }}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- General Services List -->
    <div class="bg-surface py-20 relative overflow-hidden">
      <!-- Decorative Background -->
      <div class="absolute top-0 left-0 w-full h-full opacity-5" style="background-image: url('/images/batik.jpeg'); background-size: auto; background-repeat: repeat;"></div>
      
      <div class="container mx-auto px-6 relative z-10">
         <div class="flex items-center justify-center mb-16">
            <div class="h-px bg-primary/30 w-24"></div>
            <h2 class="text-3xl font-serif text-primary mx-6 uppercase tracking-widest">{{ dentalCategories[3].title }}</h2>
            <div class="h-px bg-primary/30 w-24"></div>
         </div>
         
         <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div v-for="(treatment, index) in dentalCategories[3].treatments" :key="index" class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group border border-gray-100 hover:border-primary/20 cursor-pointer" @click="router.push(`/treatment/${treatment.id}`)">
              <div class="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                 <img :src="treatment.image" :alt="treatment.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                 <div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div class="p-8 md:w-3/5 flex flex-col justify-center">
                 <h3 class="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">{{ treatment.name }}</h3>
                 <p class="text-gray-600 text-sm leading-relaxed">{{ treatment.description }}</p>
                 
                 <div class="mt-4 pt-4 border-t border-gray-100 flex items-center text-accent text-xs font-bold uppercase tracking-widest">
                    <span>{{ $t('common.learnMore') }}</span>
                    <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                 </div>
              </div>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>
