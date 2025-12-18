<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getTreatmentById, skinAestheticTreatments, dentalTreatments } from '../Data/treatmentData.js'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()

const treatment = ref(null)
const relatedTreatments = ref([])

// Helper to get localized content
const getLocalizedContent = (content) => {
  if (typeof content === 'object' && content !== null) {
    if (content[locale.value]) return content[locale.value]
    if (content.en) return content.en
  }
  return content
}

const loadTreatment = (id) => {
  treatment.value = getTreatmentById(id)
  
  if (treatment.value) {
    // Get related treatments from the same category
    const allTreatments = treatment.value.category === 'skin-aesthetic' 
      ? skinAestheticTreatments 
      : dentalTreatments
    
    relatedTreatments.value = allTreatments
      .filter(t => t.id !== id)
      .slice(0, 3)
  }
}

onMounted(() => {
  loadTreatment(route.params.id)
})

watch(() => route.params.id, (newId) => {
  loadTreatment(newId)
  window.scrollTo(0, 0)
})

const navigateToTreatment = (treatmentId) => {
  router.push(`/treatment/${treatmentId}`)
}

const categoryName = computed(() => {
  return treatment.value?.category === 'skin-aesthetic' 
    ? t('nav.skinAesthetic') 
    : t('nav.dentalTreatment')
})

const categoryPath = computed(() => {
  return treatment.value?.category === 'skin-aesthetic' ? '/skin-aesthetic' : '/dental'
})
</script>

<template>
  <div v-if="treatment" class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <div class="absolute inset-0">
        <img :src="treatment.image" :alt="getLocalizedContent(treatment.name)" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>
      
      <div class="container mx-auto px-6 h-full flex items-center relative z-10">
        <div class="max-w-3xl text-white">
          <router-link :to="categoryPath" class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group">
            <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span class="text-sm uppercase tracking-widest">{{ $t('common.backTo') }} {{ categoryName }}</span>
          </router-link>
          
          <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight">{{ getLocalizedContent(treatment.name) }}</h1>
          <p class="text-xl text-white/90 leading-relaxed max-w-2xl">{{ getLocalizedContent(treatment.shortDescription) }}</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-16">
          <!-- Main Content -->
          <div class="lg:w-2/3">
            <div class="mb-12">
              <h2 class="text-3xl font-serif text-primary mb-6">{{ $t('treatment.overview') }}</h2>
              <p class="text-gray-600 leading-relaxed text-lg">{{ getLocalizedContent(treatment.description) }}</p>
            </div>

            <div class="mb-12">
              <h2 class="text-3xl font-serif text-primary mb-6">{{ $t('treatment.keyBenefits') }}</h2>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li v-for="(benefit, index) in getLocalizedContent(treatment.benefits)" :key="index" class="flex items-start gap-3">
                  <span class="text-accent mt-1">✦</span>
                  <span class="text-gray-600">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <div class="mb-12">
              <h2 class="text-3xl font-serif text-primary mb-6">{{ $t('treatment.procedure') }}</h2>
              <div class="space-y-6">
                <div v-for="(step, index) in getLocalizedContent(treatment.procedure)" :key="index" class="flex gap-6">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center font-serif font-bold text-lg">
                    {{ index + 1 }}
                  </div>
                  <div>
                    <p class="text-gray-600 leading-relaxed pt-2">{{ step }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:w-1/3">
            <div class="bg-surface p-8 rounded-2xl sticky top-32 border border-gray-100 shadow-lg">
              <h3 class="text-2xl font-serif text-primary mb-6">{{ $t('treatment.atAGlance') }}</h3>
              
              <div class="space-y-6 mb-8">
                <div class="flex items-start gap-4 pb-6 border-b border-gray-200">
                  <div class="text-accent">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-dark text-sm uppercase tracking-wider mb-1">{{ $t('treatment.duration') }}</h4>
                    <p class="text-gray-600">{{ getLocalizedContent(treatment.duration) }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 pb-6 border-b border-gray-200">
                  <div class="text-accent">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-dark text-sm uppercase tracking-wider mb-1">{{ $t('treatment.recovery') }}</h4>
                    <p class="text-gray-600">{{ getLocalizedContent(treatment.recovery) }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="text-accent">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-dark text-sm uppercase tracking-wider mb-1">{{ $t('treatment.results') }}</h4>
                    <p class="text-gray-600">{{ getLocalizedContent(treatment.results) }}</p>
                  </div>
                </div>
              </div>

              <a href="#contact" class="block w-full bg-primary text-white text-center py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                {{ $t('treatment.bookConsultation') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Treatments -->
    <section class="py-20 bg-surface border-t border-gray-100">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-serif text-primary mb-12 text-center">{{ $t('treatment.relatedTreatments') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="related in relatedTreatments" 
            :key="related.id"
            @click="navigateToTreatment(related.id)"
            class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
          >
            <div class="h-48 overflow-hidden relative">
              <img :src="related.image" :alt="getLocalizedContent(related.name)" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-serif text-primary mb-2 group-hover:text-accent transition-colors">{{ getLocalizedContent(related.name) }}</h3>
              <span class="text-accent text-xs font-bold uppercase tracking-widest group-hover:underline">{{ $t('common.learnMore') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
