<script setup>
import { skinAestheticCategories } from '../Data/treatmentData.js'
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
            <span class="text-white text-sm font-bold uppercase tracking-wider drop-shadow-md">{{ $t('services.skinAesthetic.treatments') }}</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{{ $t('services.skinAesthetic.title') }}</h1>
          <p class="text-xl text-white max-w-2xl leading-relaxed drop-shadow-lg">{{ $t('services.skinAesthetic.description') }}</p>
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
        <h2 class="text-4xl font-serif text-primary mb-4">{{ $t('services.skinAesthetic.categories') }}</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('services.skinAesthetic.intro') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="category in skinAestheticCategories"
          :key="category.id"
          class="flex flex-col h-full bg-[#e0e7e9] shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <!-- Image -->
          <div class="relative aspect-[4/3] overflow-hidden group">
            <img :src="category.image" :alt="category.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <!-- Simulated Before/After Labels -->
            <div class="absolute top-0 left-0 bg-white/80 px-3 py-1 text-xs font-bold text-gray-800">BEFORE</div>
            <div class="absolute top-0 right-0 bg-white/80 px-3 py-1 text-xs font-bold text-gray-800">AFTER</div>
          </div>
          
          <!-- Title -->
          <div class="bg-[#009ca6] py-4 px-4 text-center relative z-10">
            <h3 class="text-white font-bold text-lg uppercase tracking-wide">{{ category.title }}</h3>
          </div>
          
          <!-- List -->
          <div class="p-6 flex-grow bg-[#e0e7e9]">
            <ul class="space-y-2">
              <li v-for="(item, index) in category.treatments" :key="index" class="flex items-start text-sm text-gray-800 leading-relaxed group cursor-pointer hover:text-primary transition-colors" @click="router.push(`/treatment/${item.id}`)">
                <span class="mr-2 text-black mt-0.5 group-hover:text-primary transition-colors">➤</span>
                <span class="group-hover:underline">{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
