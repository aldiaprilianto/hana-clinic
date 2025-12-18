<script setup>
import { dentalCategories } from '../Data/treatmentData.js'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t, locale } = useI18n()
const router = useRouter()

const openCategories = ref({})

const toggleCategory = (id) => {
  openCategories.value[id] = !openCategories.value[id]
}

const isCategoryOpen = (id) => {
  return !!openCategories.value[id]
}

const getLoc = (val) => {
  if (typeof val === 'object' && val !== null && val.en) {
    return val[locale.value] || val.en
  }
  return val
}
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
          <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{{ $t('services.dental.title') }}</h1>
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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <div
          v-for="category in dentalCategories.slice(0, 5)"
          :key="category.id"
          class="relative h-[480px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-900"
          @click="toggleCategory(category.id)"
        >
          <!-- Blurred Background Layer -->
          <img 
            :src="category.treatments[0]?.image || '/images/dental-placeholder.jpg'" 
            class="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-125 pointer-events-none"
          >
          
          <!-- Main Image -->
          <img 
            :src="category.treatments[0]?.image || '/images/dental-placeholder.jpg'" 
            :alt="getLoc(category.title)" 
            class="absolute inset-0 w-full h-full object-contain transition-transform duration-700 ease-in-out z-10"
            :class="isCategoryOpen(category.id) ? 'scale-105' : 'group-hover:scale-105'"
          >
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 z-20"></div>

          <!-- Card Content (Default State) -->
          <div 
            class="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full transition-all duration-500 transform z-30"
            :class="isCategoryOpen(category.id) ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
          >
            <h3 class="text-white font-serif text-3xl leading-tight mb-2 drop-shadow-lg">
              {{ getLoc(category.title) }}
            </h3>
            <div class="flex items-center gap-2 text-white/80 text-sm font-medium uppercase tracking-widest mt-2 group-hover:text-white transition-colors">
              <span>{{ $t('services.viewAll') }}</span>
              <div class="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </div>

           <!-- Revealed Content (Overlay State) -->
          <div 
            class="absolute inset-0 bg-white/95 backdrop-blur-md p-8 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-50"
            :class="isCategoryOpen(category.id) ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
          >
            <!-- Header -->
            <div class="flex items-start justify-between mb-6 pb-4 border-b border-gray-100">
               <h3 class="text-primary font-serif text-2xl leading-none">
                {{ getLoc(category.title) }}
              </h3>
              <button 
                class="text-gray-400 hover:text-primary transition-colors p-1"
                @click.stop="toggleCategory(category.id)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Scrollable List -->
            <div class="h-[320px] overflow-y-auto pr-2 custom-scrollbar">
              <ul class="space-y-3">
                <li v-for="(item, index) in category.treatments" :key="index" 
                    class="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100"
                    @click.stop="router.push(`/treatment/${item.id}`)">
                  
                  <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 group-hover/item:bg-accent shrink-0 transition-colors"></div>
                  
                  <div class="flex-1">
                    <span class="text-gray-700 text-md font-semibold leading-relaxed group-hover/item:text-primary transition-colors block">
                      {{ getLoc(item.name) }}
                    </span>
                  </div>
                  
                  <svg class="w-4 h-4 text-gray-300 group-hover/item:text-accent transform -translate-x-2 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </li>
              </ul>
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
            <h2 class="text-3xl font-serif text-primary mx-6 uppercase tracking-widest">{{ getLoc(dentalCategories[5]?.title) }}</h2>
            <div class="h-px bg-primary/30 w-24"></div>
         </div>
         
         <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div v-for="(treatment, index) in dentalCategories[5]?.treatments" :key="index" class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group border border-gray-100 hover:border-primary/20 cursor-pointer" @click="router.push(`/treatment/${treatment.id}`)">
              <div class="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                 <img :src="treatment.image" :alt="getLoc(treatment.name)" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                 <div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div class="p-8 md:w-3/5 flex flex-col justify-center">
                 <h3 class="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">{{ getLoc(treatment.name) }}</h3>
                 
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

<style scoped>
/* Custom Scrollbar for the overlay list */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
