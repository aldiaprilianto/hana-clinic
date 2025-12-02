<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const selectedCategory = ref('all')

const categories = ref([
  { id: 'all', name: 'All' },
  { id: 'skin', name: 'Skin Treatments' },
  { id: 'dental', name: 'Dental' },
  { id: 'before-after', name: 'Before & After' }
])

const galleryItems = ref([
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
    title: 'Botox Treatment Result',
    category: 'skin',
    description: 'Natural-looking wrinkle reduction'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074&auto=format&fit=crop',
    title: 'Smile Makeover',
    category: 'dental',
    description: 'Complete dental transformation'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2075&auto=format&fit=crop',
    title: 'Skinbooster Glow',
    category: 'skin',
    description: 'Radiant, hydrated skin'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    title: 'Dental Implant Success',
    category: 'dental',
    description: 'Perfect tooth replacement'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1610633389918-7d5b0c9b7e3a?q=80&w=2070&auto=format&fit=crop',
    title: 'Laser Toning Results',
    category: 'skin',
    description: 'Even skin tone achieved'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
    title: 'Thread Lift Transformation',
    category: 'before-after',
    description: 'Non-surgical facelift results'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop',
    title: 'Filler Enhancement',
    category: 'skin',
    description: 'Natural volume restoration'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2074&auto=format&fit=crop',
    title: 'Teeth Whitening',
    category: 'dental',
    description: 'Brighter, whiter smile'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2073&auto=format&fit=crop',
    title: 'Acne Scar Treatment',
    category: 'before-after',
    description: 'Smooth, clear skin achieved'
  }
])

const filteredGallery = ref(galleryItems.value)

const filterGallery = (category) => {
  selectedCategory.value = category
  if (category === 'all') {
    filteredGallery.value = galleryItems.value
  } else {
    filteredGallery.value = galleryItems.value.filter(item => item.category === category)
  }
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-32 overflow-hidden">
      <!-- Batik Pattern Background -->
      <div class="absolute inset-0 opacity-15" style="background-image: url('/images/batik.jpeg'); background-size: auto; background-repeat: repeat; background-position: 0 0;"></div>
      
      <!-- Dark Overlay for Better Text Readability -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
      
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <router-link to="/" class="inline-flex items-center gap-2 text-white hover:text-white mb-8 transition-colors group drop-shadow-lg">
          <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span class="text-sm uppercase tracking-widest font-semibold">{{ $t('nav.backToHome') }}</span>
        </router-link>
        
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{{ $t('gallery.title') }}</h1>
          <p class="text-xl text-white leading-relaxed drop-shadow-lg">{{ $t('gallery.subtitle') }}</p>
        </div>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-12 bg-surface">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="filterGallery(category.id)"
            :class="[
              'px-6 py-3 rounded-full uppercase text-xs font-bold tracking-wider transition-all duration-300',
              selectedCategory === category.id
                ? 'bg-accent text-primary shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="item in filteredGallery"
            :key="item.id"
            class="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            >
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 class="text-white text-xl font-serif mb-2">{{ item.title }}</h3>
              <p class="text-white/80 text-sm">{{ item.description }}</p>
            </div>

            <!-- Icon -->
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-serif mb-6">{{ $t('gallery.readyForTransformation') }}</h2>
        <p class="text-white/90 mb-10 max-w-2xl mx-auto text-lg">{{ $t('gallery.readyDescription') }}</p>
        <a href="/#contact" class="inline-block bg-accent text-primary px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_40px_rgba(197,160,89,0.6)] hover:scale-105">
          {{ $t('gallery.bookConsultation') }}
        </a>
      </div>
    </section>
  </div>
</template>
