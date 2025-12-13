<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="services" class="py-24 bg-secondary relative overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <!-- <h3 class="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 animate-fade-in">{{ $t('services.expertise') }}</h3> -->
        <h2 class="text-4xl md:text-5xl font-serif text-primary mb-4 animate-slide-up">{{ $t('services.title') }}</h2>
        <p class="text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slide-up">{{ $t('services.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Service 1: Skin Aesthetic Treatment (PRIMARY/DOMINANT) -->
        <router-link to="/skin-aesthetic" id="skin-aesthetic" class="group bg-white p-8 rounded-3xl text-center cursor-pointer relative overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] transition-all duration-700 border border-gray-100 hover:border-accent/30 transform hover:-translate-y-2">
          <!-- Top Accent Line -->
          <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Category Badge -->
          <div class="absolute top-6 right-6 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            {{ $t('services.skinAesthetic.treatments') }}
          </div>
          
          <!-- Image Container -->
          <div class="mb-8 overflow-hidden rounded-2xl relative aspect-[4/3] shadow-lg">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 group-hover:from-black/20 transition-all z-10 duration-700"></div>
            <div class="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors z-10 duration-500"></div>
            <img src="/images/treatments/SkinBanner.png" alt="Skin Aesthetic Treatment" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0">
            
            <!-- Floating Icon -->
            <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
          </div>
          
          <h3 class="text-3xl font-serif mb-4 text-primary group-hover:text-accent transition-colors duration-300">{{ $t('services.skinAesthetic.title') }}</h3>
          <p class="text-gray-500 leading-relaxed mb-6 font-light">{{ $t('services.skinAesthetic.description') }}</p>
          
          <!-- Treatment Highlights -->
          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Acne Solutions</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Anti-Aging Solutions</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Brightening Solutions</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Scars & Pore Solutions</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Hair Growth Treatments</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Hair Removal Solutions</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Rejuvenating Treatments</span>
          </div>
          
          <div class="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 group-hover:text-accent transition-colors font-semibold">
            <span>{{ $t('services.learnMore') }}</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </router-link>

        <!-- Service 2: Dental Treatment (SECONDARY) -->
        <router-link to="/dental" id="dental" class="group bg-white p-8 rounded-3xl text-center cursor-pointer relative overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] transition-all duration-700 border border-gray-100 hover:border-accent/30 transform hover:-translate-y-2">
          <!-- Top Accent Line -->
          <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Category Badge -->
          <div class="absolute top-6 right-6 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            {{ $t('services.dental.services') }}
          </div>
          
          <!-- Image Container -->
          <div class="mb-8 overflow-hidden rounded-2xl relative aspect-[4/3] shadow-lg">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 group-hover:from-black/20 transition-all z-10 duration-700"></div>
            <div class="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors z-10 duration-500"></div>
            <img src="/images/treatments/DentalBanner.png" alt="Dental Treatment" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0">
            
            <!-- Floating Icon -->
            <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          
          <h3 class="text-3xl font-serif mb-4 text-primary group-hover:text-accent transition-colors duration-300">{{ $t('services.dental.title') }}</h3>
          <p class="text-gray-500 leading-relaxed mb-6 font-light">{{ $t('services.dental.description') }}</p>
          
          <!-- Treatment Highlights -->
          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Aesthetic</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Orthodontic</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Endodontic</span>
          </div>
          
          <div class="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 group-hover:text-accent transition-colors font-semibold">
            <span>{{ $t('services.learnMore') }}</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}
</style>
