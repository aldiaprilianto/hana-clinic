<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="py-20 bg-white overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Image with decorative elements -->
        <div class="lg:w-1/2 relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
              alt="Hana Clinic Interior" 
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          <!-- Floating Stats/Card -->
          <div class="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-float">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold text-primary">15+</div>
                <div class="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>
          
          <!-- Decorative Pattern -->
          <div class="absolute -top-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        </div>

        <!-- Content -->
        <div class="lg:w-1/2">
          <div class="inline-block bg-accent/10 px-4 py-2 rounded-full mb-6">
            <span class="text-accent text-sm font-bold uppercase tracking-wider">{{ $t('aboutUs.title') }}</span>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">{{ $t('aboutUs.subtitle') }}</h2>
          
          <p class="text-gray-600 text-lg leading-relaxed mb-8">
            {{ $t('aboutUs.description') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div class="bg-surface p-6 rounded-xl border border-gray-100 hover:border-accent/30 transition-colors">
              <h3 class="font-serif text-xl text-primary mb-3">{{ $t('aboutUs.mission') }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ $t('aboutUs.missionText') }}</p>
            </div>
            <div class="bg-surface p-6 rounded-xl border border-gray-100 hover:border-accent/30 transition-colors">
              <h3 class="font-serif text-xl text-primary mb-3">{{ $t('aboutUs.vision') }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ $t('aboutUs.visionText') }}</p>
            </div>
          </div>

          <router-link to="/team" class="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors group">
            <span>{{ $t('common.learnMore') }}</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
</style>
