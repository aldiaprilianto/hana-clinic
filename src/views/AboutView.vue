<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const advantages = [
  {
    key: 'accessibleExcellence',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    key: 'cuttingEdgeTech',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  },
  {
    key: 'trustedSpecialists',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    key: 'uncompromisedSafety',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    key: 'sustainableBeauty',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  }
]
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-32 overflow-hidden">
      <!-- Batik Pattern Background -->
      <div class="absolute inset-0 opacity-15" style="background-image: url('/images/batik.jpeg'); background-size: auto; background-repeat: repeat; background-position: 0 0;"></div>
      
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
      
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10 w-full text-left">
        <router-link to="/" class="inline-flex items-center gap-2 text-white hover:text-white mb-8 transition-colors group drop-shadow-lg">
          <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span class="text-sm uppercase tracking-widest font-semibold">{{ $t('nav.backToHome') }}</span>
        </router-link>
        
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{{ $t('aboutUs.title') }}</h1>
          <p class="text-xl text-white leading-relaxed drop-shadow-lg">{{ $t('aboutUs.subtitle') }}</p>
        </div>
      </div>
      
       <!-- Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <blockquote class="text-2xl md:text-3xl font-serif text-primary italic mb-12">
            {{ $t('aboutUs.tagline') }}
          </blockquote>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center">
            <div class="space-y-6">
               <p class="text-gray-600 text-lg leading-relaxed border-l-4 border-accent pl-6">
                {{ $t('aboutUs.description') }}
              </p>
              <div class="bg-surface p-6 rounded-xl border border-gray-100">
                <h3 class="font-serif text-xl text-primary mb-2">{{ $t('aboutUs.focus') }}</h3>
              </div>
            </div>
            <div v-html="$t('aboutUs.symbolism')" class="text-gray-600 leading-relaxed bg-primary/5 p-8 rounded-2xl">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Competitive Advantages -->
    <section class="py-20 bg-surface relative overflow-hidden">
      <!-- Decorative Background -->
      <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: url('/images/batik.jpeg'); background-size: auto; background-repeat: repeat;"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif text-primary mb-4">{{ $t('aboutUs.advantageTitle') }}</h2>
          <div class="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <div 
            v-for="adv in advantages" 
            :key="adv.key"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-accent/30"
          >
            <div class="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="adv.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-serif text-primary mb-3">{{ $t(`aboutUs.advantages.${adv.key}`) }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ $t(`aboutUs.advantages.${adv.key}Desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-serif text-primary mb-8">{{ $t('aboutUs.readyToVisit') }}</h2>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <router-link to="/team" class="px-8 py-3 bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full uppercase tracking-widest text-sm font-bold">
            {{ $t('nav.team') }}
          </router-link>
          <a href="https://wa.me/6281386017622" target="_blank" class="px-8 py-3 bg-accent text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full uppercase tracking-widest text-sm font-bold shadow-lg">
            {{ $t('nav.bookAppointment') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
