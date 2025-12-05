<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const showServicesDropdown = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const switchLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="[
    'fixed w-full z-50 transition-all duration-500',
    isScrolled ? 'glass py-4' : 'bg-transparent py-6'
  ]">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center gap-2 group">
          <!-- Logo Image -->
          <img src="/images/logo.png" alt="Hana Clinic Logo" class="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
        </router-link>
      </div>
      
      <!-- Desktop Menu -->
      <nav class="hidden lg:flex items-center space-x-6">
        <router-link to="/" class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300">{{ $t('nav.home') }}</router-link>
        <router-link to="/about" class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300">{{ $t('nav.about') }}</router-link>
        
        <!-- Services Dropdown -->
        <div 
          class="relative"
          @mouseenter="showServicesDropdown = true"
          @mouseleave="showServicesDropdown = false"
        >
          <button class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300 flex items-center gap-1">
            {{ $t('nav.services') }}
            <svg class="w-4 h-4 transition-transform" :class="showServicesDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <!-- Dropdown Menu -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div v-if="showServicesDropdown" class="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <router-link to="/skin-aesthetic" class="block px-6 py-4 hover:bg-accent/10 transition-colors group">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-primary group-hover:text-accent transition-colors">{{ $t('nav.skinAesthetic') }}</div>
                    <div class="text-xs text-gray-500">{{ $t('services.skinAesthetic.treatments') }}</div>
                  </div>
                </div>
              </router-link>
              
              <router-link to="/dental" class="block px-6 py-4 hover:bg-accent/10 transition-colors group">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-primary group-hover:text-accent transition-colors">{{ $t('nav.dentalTreatment') }}</div>
                    <div class="text-xs text-gray-500">{{ $t('services.dental.services') }}</div>
                  </div>
                </div>
              </router-link>
            </div>
          </transition>
        </div>
        
        <router-link to="/team" class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300">{{ $t('nav.team') }}</router-link>
        <router-link to="/gallery" class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300">{{ $t('nav.gallery') }}</router-link>
        <router-link to="/blog" class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300">{{ $t('nav.blog') }}</router-link>
        <router-link to="/career" class="nav-link text-sm uppercase tracking-[0.15em] text-primary/80 hover:text-accent font-medium transition-all duration-300">{{ $t('nav.career') }}</router-link>
        
        <!-- Language Switcher with Flags -->
        <div class="relative group">
          <button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20">
            <span class="text-xl">{{ locale === 'id' ? '🇮🇩' : '🇬🇧' }}</span>
            <span class="text-xs font-semibold uppercase tracking-wider">{{ locale === 'id' ? 'ID' : 'EN' }}</span>
            <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <!-- Dropdown -->
          <div class="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
            <button 
              @click="switchLanguage('id')" 
              :class="[
                'w-full flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors',
                locale === 'id' ? 'bg-accent/5' : ''
              ]"
            >
              <span class="text-2xl">🇮🇩</span>
              <div class="text-left flex-1">
                <div class="text-sm font-semibold text-primary">Indonesia</div>
                <div class="text-xs text-gray-500">Bahasa</div>
              </div>
              <svg v-if="locale === 'id'" class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <button 
              @click="switchLanguage('en')" 
              :class="[
                'w-full flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors',
                locale === 'en' ? 'bg-accent/5' : ''
              ]"
            >
              <span class="text-2xl">🇬🇧</span>
              <div class="text-left flex-1">
                <div class="text-sm font-semibold text-primary">English</div>
                <div class="text-xs text-gray-500">Language</div>
              </div>
              <svg v-if="locale === 'en'" class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <a href="https://wa.me/6281386017622" target="_blank" class="btn-primary ml-4">
          {{ $t('nav.bookAppointment') }}
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-primary focus:outline-none hover:text-accent transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isMenuOpen" class="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-lg">
        <div class="flex flex-col px-6 py-8 space-y-6">
          <router-link to="/" @click="isMenuOpen = false" class="text-primary/80 hover:text-accent uppercase text-sm tracking-[0.15em] font-medium transition-colors">{{ $t('nav.home') }}</router-link>
          <router-link to="/about" @click="isMenuOpen = false" class="text-primary/80 hover:text-accent uppercase text-sm tracking-[0.15em] font-medium transition-colors">{{ $t('nav.about') }}</router-link>
          
          <!-- Mobile Services -->
          <div class="space-y-3">
            <div class="text-primary/80 uppercase text-sm tracking-[0.15em] font-medium">{{ $t('nav.services') }}</div>
            <router-link to="/skin-aesthetic" @click="isMenuOpen = false" class="block pl-4 text-primary/70 hover:text-accent text-sm transition-colors">{{ $t('nav.skinAesthetic') }} (20)</router-link>
            <router-link to="/dental" @click="isMenuOpen = false" class="block pl-4 text-primary/70 hover:text-accent text-sm transition-colors">{{ $t('nav.dentalTreatment') }} (12)</router-link>
          </div>
          
          <router-link to="/team" @click="isMenuOpen = false" class="text-primary/80 hover:text-accent uppercase text-sm tracking-[0.15em] font-medium transition-colors">{{ $t('nav.team') }}</router-link>
          <router-link to="/gallery" @click="isMenuOpen = false" class="text-primary/80 hover:text-accent uppercase text-sm tracking-[0.15em] font-medium transition-colors">{{ $t('nav.gallery') }}</router-link>
          <router-link to="/blog" @click="isMenuOpen = false" class="text-primary/80 hover:text-accent uppercase text-sm tracking-[0.15em] font-medium transition-colors">{{ $t('nav.blog') }}</router-link>
          <router-link to="/career" @click="isMenuOpen = false" class="text-primary/80 hover:text-accent uppercase text-sm tracking-[0.15em] font-medium transition-colors">{{ $t('nav.career') }}</router-link>
          
          <!-- Mobile Language Switcher -->
          <div class="pt-4 border-t border-gray-200">
            <div class="text-xs text-gray-500 uppercase tracking-wider mb-3">Language / Bahasa</div>
            <div class="grid grid-cols-2 gap-3">
              <button 
                @click="switchLanguage('id')" 
                :class="[
                  'flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 border-2',
                  locale === 'id' ? 'bg-accent/10 border-accent text-primary' : 'bg-gray-50 border-gray-200 text-gray-600'
                ]"
              >
                <span class="text-2xl">🇮🇩</span>
                <div class="text-left">
                  <div class="text-xs font-bold">ID</div>
                  <div class="text-[10px]">Indonesia</div>
                </div>
              </button>
              <button 
                @click="switchLanguage('en')" 
                :class="[
                  'flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 border-2',
                  locale === 'en' ? 'bg-accent/10 border-accent text-primary' : 'bg-gray-50 border-gray-200 text-gray-600'
                ]"
              >
                <span class="text-2xl">🇬🇧</span>
                <div class="text-left">
                  <div class="text-xs font-bold">EN</div>
                  <div class="text-[10px]">English</div>
                </div>
              </button>
            </div>
          </div>
          
          <a href="https://wa.me/6281386017622" target="_blank" @click="isMenuOpen = false" class="btn-primary text-center w-full">{{ $t('nav.bookNow') }}</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -4px;
  left: 0;
  background-color: #C5A059;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.btn-primary {
  @apply bg-accent text-primary px-6 py-2.5 uppercase text-xs tracking-[0.2em] font-bold rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)];
}

.glass {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}
</style>
