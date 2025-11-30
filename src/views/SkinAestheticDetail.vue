<script setup>
import { skinAestheticTreatments } from '../Data/treatmentData.js'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const router = useRouter()

const navigateToTreatment = (treatmentId) => {
  router.push(`/treatment/${treatmentId}`)
}

// Helper to get localized content
const getLocalizedContent = (content) => {
  if (typeof content === 'object' && content !== null && content[locale.value]) {
    return content[locale.value]
  }
  return content // Fallback to string if not localized yet
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Header -->
    <header class="relative bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-32 overflow-hidden">
      <!-- Batik Pattern Background -->
      <div class="absolute inset-0 opacity-20">
        <img src="/images/batik.jpeg" alt="" class="w-full h-full object-cover" />
      </div>
      
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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="treatment in skinAestheticTreatments"
          :key="treatment.id"
          @click="navigateToTreatment(treatment.id)"
          class="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-500 cursor-pointer border border-gray-100 hover:border-accent/30 transform hover:-translate-y-1"
        >
          <!-- Image -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
            <img :src="treatment.image" :alt="getLocalizedContent(treatment.name)" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
            
            <!-- Overlay Badge -->
            <div class="absolute top-4 left-4 z-20">
              <span class="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                {{ $t('common.premium') }}
              </span>
            </div>
          </div>
          
          <!-- Content -->
          <div class="p-8">
            <h3 class="text-xl font-serif mb-3 text-primary group-hover:text-accent transition-colors">{{ getLocalizedContent(treatment.name) }}</h3>
            <p class="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">{{ getLocalizedContent(treatment.shortDescription) }}</p>
            
            <div class="flex items-center justify-between border-t border-gray-100 pt-4">
              <span class="text-accent text-xs font-bold uppercase tracking-widest group-hover:underline">{{ $t('common.learnMore') }}</span>
              <div class="w-8 h-8 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
