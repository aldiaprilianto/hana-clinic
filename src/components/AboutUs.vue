<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="py-24 bg-surface overflow-hidden relative">
    <div class="container mx-auto px-6">
      <!-- Title Section to match 'Spectacular' style -->
      <div class="text-center mb-16 relative z-10 max-w-4xl mx-auto">
        <h3 class="text-accent text-sm font-medium uppercase tracking-[0.3em] mb-4">{{ $t('aboutUs.title') }}</h3>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight mb-6">{{ $t('aboutUs.subtitle') }}</h2>
        <div class="w-24 h-px bg-accent/30 mx-auto"></div>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <!-- Image using the user provided image -->
        <div class="lg:w-1/2 relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
            <img 
              src="/images/clinic/clinic23.png" 
              alt="Hana Clinic Interior" 
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          <!-- Decorative Pattern -->
          <div class="absolute -top-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        </div>

        <!-- Content -->
        <div class="lg:w-1/2">
          <div class="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
            <p>
              {{ $t('aboutUs.description') }}
            </p>
            <div class="border-l-4 border-accent/30 pl-6 italic text-gray-700">
              {{ $t('aboutUs.tagline') }}
            </div>
            <p>
              {{ $t('aboutUs.focus') }}
            </p>
            <p v-html="$t('aboutUs.symbolism')"></p>
          </div>

          <div class="space-y-6">
            <h3 class="font-serif text-2xl text-primary mb-6">{{ $t('aboutUs.advantageTitle') }}</h3>
            
            <!-- Advantage Items -->
            <div class="grid gap-6">
              <div class="flex gap-4 items-start group">
                <div class="w-10 h-10 shrink-0 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span class="text-xl">💎</span>
                </div>
                <div>
                  <h4 class="font-bold text-primary">{{ $t('aboutUs.advantages.accessibleExcellence') }}</h4>
                  <p class="text-sm text-gray-600 mt-1">{{ $t('aboutUs.advantages.accessibleExcellenceDesc') }}</p>
                </div>
              </div>

              <div class="flex gap-4 items-start group">
                <div class="w-10 h-10 shrink-0 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span class="text-xl">💻</span>
                </div>
                <div>
                  <h4 class="font-bold text-primary">{{ $t('aboutUs.advantages.cuttingEdgeTech') }}</h4>
                  <p class="text-sm text-gray-600 mt-1">{{ $t('aboutUs.advantages.cuttingEdgeTechDesc') }}</p>
                </div>
              </div>

              <div class="flex gap-4 items-start group">
                <div class="w-10 h-10 shrink-0 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span class="text-xl">👩‍⚕️</span>
                </div>
                <div>
                  <h4 class="font-bold text-primary">{{ $t('aboutUs.advantages.trustedSpecialists') }}</h4>
                  <p class="text-sm text-gray-600 mt-1">{{ $t('aboutUs.advantages.trustedSpecialistsDesc') }}</p>
                </div>
              </div>

               <div class="flex gap-4 items-start group">
                <div class="w-10 h-10 shrink-0 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span class="text-xl">🛡️</span>
                </div>
                <div>
                  <h4 class="font-bold text-primary">{{ $t('aboutUs.advantages.uncompromisedSafety') }}</h4>
                  <p class="text-sm text-gray-600 mt-1">{{ $t('aboutUs.advantages.uncompromisedSafetyDesc') }}</p>
                </div>
              </div>

               <div class="flex gap-4 items-start group">
                <div class="w-10 h-10 shrink-0 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span class="text-xl">🌿</span>
                </div>
                <div>
                  <h4 class="font-bold text-primary">{{ $t('aboutUs.advantages.sustainableBeauty') }}</h4>
                  <p class="text-sm text-gray-600 mt-1">{{ $t('aboutUs.advantages.sustainableBeautyDesc') }}</p>
                </div>
              </div>
            </div>
          </div>
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
