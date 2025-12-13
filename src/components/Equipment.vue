<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const tools = [
  { id: 'shurink', image: '/images/tools/ShurinkUniverse.png' },
  { id: 'ultraformer', image: '/images/tools/ClassysUltraformer3.png' },
  { id: 'picocare', image: '/images/tools/LaserPicocare450(Wontech).png' },
  { id: 'clarity', image: '/images/tools/LutronicClarity2LaserHairRemoval.png' },
  { id: 'soprano', image: '/images/tools/SopranoKorea808DiodeLaser.png' },
  { id: 'vitalinjector', image: '/images/tools/VitalInjector2SkinBooster.png' },
  { id: 'dermashine', image: '/images/tools/DermaShinePro.png' },
  { id: 'secretrf', image: '/images/tools/SecretRF.png' },
  { id: 'fraxis', image: '/images/tools/LaserFractionalFraxisDuobyJeisysMedical.png' },
  { id: 'emsculpt', image: '/images/tools/EMSculpt.png' },
  { id: 'clatuu', image: '/images/tools/ClassysClatuuAlpha.png' },
  { id: 'exilis', image: '/images/tools/ExilisElite.png' },
  { id: 'aquasure', image: '/images/tools/AquaSureH2.png' },
  { id: 'o2toderm', image: '/images/tools/O2toDermOxygenInfusion.png' },
  { id: 'hydroscalp', image: '/images/tools/HydroScalp.png' },
  { id: 'cellreturn', image: '/images/tools/CellReturnLEDMask.png' },
  { id: 'kiierr', image: '/images/tools/KiierrKoreaCap.png' },
  { id: 'curas', image: '/images/tools/CurasIPL(IntensePulsedLight).png' },
  { id: 'medifuge', image: '/images/tools/Medifuge.png' }
]
</script>

<template>
  <section id="equipment" class="py-24 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20 max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif text-primary mb-6 drop-shadow-sm">{{ $t('equipment.title') }}</h2>
        <div class="w-24 h-1 bg-accent mx-auto mb-8 rounded-full"></div>
        <p class="text-gray-600 text-lg leading-relaxed">{{ $t('equipment.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="tool in tools" 
          :key="tool.id"
          class="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2"
        >
          <!-- Image Container -->
          <div class="h-64 p-6 flex items-center justify-center bg-gray-50/50 group-hover:bg-accent/5 transition-colors duration-500 relative overflow-hidden">
             <!-- Decorative Circle -->
            <div class="absolute w-48 h-48 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 shadow-inner"></div>
            
            <img 
              :src="tool.image" 
              :alt="$t(`equipment.${tool.id}.title`)" 
              class="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-700 filter drop-shadow-lg"
            >
          </div>
          
          <!-- Content -->
          <div class="p-8 flex flex-col flex-grow text-center relative">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rotate-45 bg-white border-t border-l border-gray-100 z-10"></div>
            
            <div class="mb-4">
               <span class="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest">
                {{ $t(`equipment.${tool.id}.tag`) }}
              </span>
            </div>
            
            <h3 class="text-xl font-serif text-primary mb-3 group-hover:text-accent transition-colors duration-300">
              {{ $t(`equipment.${tool.id}.title`) }}
            </h3>
            
            <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              {{ $t(`equipment.${tool.id}.description`) }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-20">
        <a href="#contact" class="inline-flex items-center gap-3 bg-primary text-white pl-8 pr-6 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl group">
          <span>{{ $t('equipment.scheduleConsultation') }}</span>
          <span class="bg-white/20 p-1 rounded-full">
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
