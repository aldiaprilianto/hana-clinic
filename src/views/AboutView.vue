<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

// Advantages keys matching the translation file
const advantages = [
  {
    key: 'trust',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    key: 'expertTeam',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    key: 'modernTech',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  },
  {
    key: 'patientCare',
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

    <!-- About Content Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <!-- Using clinic interior image -->
             <img src="/images/clinic/clinic23.png" alt="Hana Clinic Interior" class="w-full h-full object-cover min-h-[400px]" onerror="this.onerror=null; this.src='/images/batik.jpeg'"/>
          </div>
          <div class="space-y-6">
             <h2 class="text-3xl font-serif text-primary leading-tight">{{ $t('aboutUs.storyTitle') }}</h2>
             <div class="w-20 h-1 bg-accent"></div>
             <p class="text-gray-600 leading-relaxed whitespace-pre-line">
               {{ $t('aboutUs.description2') }}
             </p>
             <blockquote class="text-xl font-serif text-primary italic border-l-4 border-accent pl-6 py-2 bg-primary/5 rounded-r-lg">
                {{ $t('aboutUs.tagline') }}
             </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-20 bg-surface relative overflow-hidden">
        <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: url('/images/batik.jpeg'); background-size: auto; background-repeat: repeat;"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <!-- Mission -->
                <div>
                   <h3 class="text-2xl font-serif text-primary mb-6 flex items-center gap-3">
                       <span class="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-lg font-bold">M</span>
                       {{ $t('aboutUs.mission') }}
                   </h3>
                   <ul class="space-y-4">
                       <li v-for="(item, index) in tm('aboutUs.missionText')" :key="index" class="flex gap-3 text-gray-700">
                           <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                           </svg>
                           <span>{{ item }}</span>
                       </li>
                   </ul>
                </div>
                
                <!-- Vision -->
                 <div>
                   <h3 class="text-2xl font-serif text-primary mb-6 flex items-center gap-3">
                       <span class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold">V</span>
                       {{ $t('aboutUs.vision') }}
                   </h3>
                   <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                       <p class="text-lg text-gray-700 leading-relaxed text-center italic">
                           "{{ $t('aboutUs.visionText') }}"
                       </p>
                   </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif text-primary mb-4">{{ $t('aboutUs.whyChooseUs') }}</h2>
          <div class="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="adv in advantages" 
            :key="adv.key"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-accent/30 text-center"
          >
            <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/20 transition-colors">
              <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section class="py-20 text-center bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-serif text-primary mb-8">{{ $t('aboutUs.readyToVisit') }}</h2>
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <!-- Team / Our Location Button -->
          <router-link to="/location" class="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full uppercase tracking-widest text-sm font-bold shadow-lg">
            {{ $t('aboutUs.ourLocation') }}
          </router-link>
          
          <!-- Book Appointment Button -->
          <a href="https://wa.me/6281386017622" target="_blank" class="px-8 py-3 bg-[#4BAF47] text-white hover:bg-[#3d9139] transition-all duration-300 rounded-full uppercase tracking-widest text-sm font-bold shadow-lg">
            {{ $t('nav.bookAppointment') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
