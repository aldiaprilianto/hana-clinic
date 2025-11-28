<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getTreatmentById, skinAestheticTreatments, dentalTreatments } from '../Data/treatmentData.js'

const route = useRoute()
const router = useRouter()

const treatment = ref(null)
const relatedTreatments = ref([])

onMounted(() => {
  const treatmentId = route.params.id
  treatment.value = getTreatmentById(treatmentId)
  
  if (treatment.value) {
    // Get related treatments from the same category
    const allTreatments = treatment.value.category === 'skin-aesthetic' 
      ? skinAestheticTreatments 
      : dentalTreatments
    
    relatedTreatments.value = allTreatments
      .filter(t => t.id !== treatmentId)
      .slice(0, 3)
  }
})

const navigateToTreatment = (treatmentId) => {
  router.push(`/treatment/${treatmentId}`)
  window.scrollTo(0, 0)
  treatment.value = getTreatmentById(treatmentId)
}

const categoryName = computed(() => {
  return treatment.value?.category === 'skin-aesthetic' ? 'Skin Aesthetic' : 'Dental'
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
        <img :src="treatment.image" :alt="treatment.name" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>
      
      <div class="container mx-auto px-6 h-full flex items-center relative z-10">
        <div class="max-w-3xl text-white">
          <router-link :to="categoryPath" class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group">
            <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span class="text-sm uppercase tracking-widest">Back to {{ categoryName }}</span>
          </router-link>
          
          <div class="inline-block bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span class="text-accent text-sm font-bold uppercase tracking-wider">{{ categoryName }} Treatment</span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-serif mb-6">{{ treatment.name }}</h1>
          <p class="text-xl text-white/90 leading-relaxed">{{ treatment.shortDescription }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Main Content Column -->
        <div class="lg:col-span-2">
          <!-- Overview -->
          <section class="mb-16">
            <h2 class="text-3xl font-serif text-primary mb-6">Overview</h2>
            <p class="text-gray-700 leading-relaxed text-lg">{{ treatment.description }}</p>
          </section>

          <!-- Benefits -->
          <section class="mb-16">
            <h2 class="text-3xl font-serif text-primary mb-8">Benefits</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(benefit, index) in treatment.benefits"
                :key="index"
                class="flex items-start gap-3 bg-surface p-4 rounded-xl border border-gray-100"
              >
                <div class="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                  <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">{{ benefit }}</span>
              </div>
            </div>
          </section>

          <!-- Procedure -->
          <section class="mb-16">
            <h2 class="text-3xl font-serif text-primary mb-8">Procedure</h2>
            <div class="space-y-4">
              <div
                v-for="(step, index) in treatment.procedure"
                :key="index"
                class="flex gap-4 items-start"
              >
                <div class="flex-shrink-0 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center font-bold">
                  {{ index + 1 }}
                </div>
                <div class="flex-1 pt-2">
                  <p class="text-gray-700">{{ step }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-24 space-y-6">
            <!-- Quick Info Card -->
            <div class="bg-gradient-to-br from-primary to-[#2a3f3f] text-white p-8 rounded-2xl shadow-xl">
              <h3 class="text-2xl font-serif mb-6">Quick Information</h3>
              
              <div class="space-y-4">
                <div class="border-b border-white/20 pb-4">
                  <div class="text-white/70 text-sm uppercase tracking-wider mb-1">Duration</div>
                  <div class="text-lg">{{ treatment.duration }}</div>
                </div>
                
                <div class="border-b border-white/20 pb-4">
                  <div class="text-white/70 text-sm uppercase tracking-wider mb-1">Recovery Time</div>
                  <div class="text-lg">{{ treatment.recovery }}</div>
                </div>
                
                <div class="pb-2">
                  <div class="text-white/70 text-sm uppercase tracking-wider mb-1">Results</div>
                  <div class="text-lg">{{ treatment.results }}</div>
                </div>
              </div>
            </div>

            <!-- CTA Card -->
            <div class="bg-accent/10 p-8 rounded-2xl border-2 border-accent/30">
              <h3 class="text-xl font-serif text-primary mb-4">Ready to Get Started?</h3>
              <p class="text-gray-600 mb-6 text-sm">Book a consultation with our specialists to discuss your treatment plan</p>
              <a href="/#contact" class="block w-full bg-accent text-primary text-center px-6 py-3 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Treatments -->
    <section v-if="relatedTreatments.length > 0" class="bg-surface py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-serif text-primary mb-12 text-center">Related Treatments</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="related in relatedTreatments"
            :key="related.id"
            @click="navigateToTreatment(related.id)"
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1"
          >
            <div class="relative aspect-[4/3] overflow-hidden">
              <img 
                :src="related.image" 
                :alt="related.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              >
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-serif text-primary mb-2 group-hover:text-accent transition-colors">{{ related.name }}</h3>
              <p class="text-gray-600 text-sm line-clamp-2">{{ related.shortDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-serif mb-6">Transform Your Beauty Journey Today</h2>
        <p class="text-white/90 mb-10 max-w-2xl mx-auto text-lg">Our experienced team is ready to help you achieve your aesthetic goals with personalized care and advanced treatments</p>
        <a href="/#contact" class="inline-block bg-accent text-primary px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_40px_rgba(197,160,89,0.6)] hover:scale-105">
          Contact Us Now
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
