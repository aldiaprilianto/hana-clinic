<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const blogPosts = ref([
  {
    id: 1,
    title: 'The Ultimate Guide to Korean Skincare Routine',
    excerpt: 'Discover the secrets behind the famous Korean 10-step skincare routine and how it can transform your skin.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2073&auto=format&fit=crop',
    category: 'Skincare',
    date: '2024-11-20',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Botox vs Fillers: Which One is Right for You?',
    excerpt: 'Understanding the differences between Botox and dermal fillers to make the best choice for your aesthetic goals.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    category: 'Treatments',
    date: '2024-11-18',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Maintaining Your Smile: Essential Dental Care Tips',
    excerpt: 'Expert advice on keeping your teeth healthy and your smile bright between dental visits.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074&auto=format&fit=crop',
    category: 'Dental',
    date: '2024-11-15',
    readTime: '4 min read'
  },
  {
    id: 4,
    title: 'Thread Lifting: The Non-Surgical Facelift',
    excerpt: 'Everything you need to know about thread lifting, the revolutionary non-surgical alternative to traditional facelifts.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
    category: 'Treatments',
    date: '2024-11-12',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'Laser Hair Removal: What to Expect',
    excerpt: 'A comprehensive guide to laser hair removal treatment, preparation, and aftercare for optimal results.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop',
    category: 'Treatments',
    date: '2024-11-10',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'Dental Implants: A Permanent Solution',
    excerpt: 'Learn how dental implants can restore your smile and confidence with a permanent, natural-looking solution.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    category: 'Dental',
    date: '2024-11-08',
    readTime: '8 min read'
  }
])

const featuredPost = ref(blogPosts.value[0])
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
          <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{{ $t('blog.title') }}</h1>
          <p class="text-xl text-white leading-relaxed drop-shadow-lg">{{ $t('blog.subtitle') }}</p>
        </div>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="py-20 bg-surface">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
            <div class="relative aspect-[4/3] lg:aspect-auto">
              <img :src="featuredPost.image" :alt="featuredPost.title" class="w-full h-full object-cover">
              <div class="absolute top-6 left-6 bg-accent text-primary px-4 py-2 rounded-full text-xs font-bold uppercase">
                Featured
              </div>
            </div>
            
            <div class="p-10 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-accent text-sm font-semibold uppercase tracking-wider">{{ featuredPost.category }}</span>
                <span class="text-gray-400">•</span>
                <span class="text-gray-500 text-sm">{{ featuredPost.date }}</span>
                <span class="text-gray-400">•</span>
                <span class="text-gray-500 text-sm">{{ featuredPost.readTime }}</span>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-serif text-primary mb-4">{{ featuredPost.title }}</h2>
              <p class="text-gray-600 leading-relaxed mb-6 text-lg">{{ featuredPost.excerpt }}</p>
              
              <a href="#" class="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                <span>Read More</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif text-primary mb-4">{{ $t('blog.latestArticles') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('blog.latestDescription') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in blogPosts.slice(1)"
            :key="post.id"
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30 cursor-pointer"
          >
            <div class="relative aspect-[4/3] overflow-hidden">
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              >
              <div class="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                {{ post.category }}
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center gap-3 mb-3 text-sm text-gray-500">
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>
              
              <h3 class="text-xl font-serif text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{{ post.excerpt }}</p>
              
              <a href="#" class="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                <span>Read Article</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-serif mb-6">{{ $t('blog.stayUpdated') }}</h2>
        <p class="text-white/90 mb-10 max-w-2xl mx-auto text-lg">{{ $t('blog.stayDescription') }}</p>
        
        <div class="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            :placeholder="$t('blog.enterEmail')"
            class="flex-1 px-6 py-4 rounded-full text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          >
          <button class="bg-accent text-primary px-8 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
            {{ $t('blog.subscribe') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
