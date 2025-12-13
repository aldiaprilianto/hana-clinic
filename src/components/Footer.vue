<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer id="contact" class="relative bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-24 overflow-hidden">
    <!-- Batik Pattern Background -->
    <div class="absolute inset-0 opacity-15" style="background-image: url('/images/batik.jpeg'); background-size: auto; background-repeat: repeat; background-position: 0 0;"></div>
    
    <!-- Dark overlay to ensure text readability -->
    <div class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div>
          <a href="#" class="inline-block mb-8">
            <img src="/images/logo.png" alt="Hana Clinic Logo" class="h-24 w-auto brightness-0 invert" />
          </a>
          <p class="text-gray-300 font-light leading-relaxed mb-8">
            {{ $t('footer.tagline') }}
          </p>
          <div class="flex space-x-4">
             <!-- Instagram -->
            <a href="https://www.instagram.com/hanaclinic.id/" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 text-white group">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <!-- TikTok -->
            <a href="https://www.tiktok.com/@hana.clinics" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 text-white">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>

            <!-- Youtube -->
            <a href="https://www.youtube.com/@hanaclinicid" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 text-white">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <!-- LinkedIn -->
             <a href="https://www.linkedin.com/company/pt-hana-kompak-jaya-hana-clinic/" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 text-white">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 6.111-4.981 6.108 0v8.306h5v-10.477c0-7.791-8.73-7.505-11.14-3.678v-2.151z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm uppercase tracking-[0.2em] text-white font-bold mb-8">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-3 text-white/80 font-light">
            <li><router-link to="/" class="hover:text-white transition-colors">{{ $t('nav.home') }}</router-link></li>
            <li><router-link to="/about" class="hover:text-white transition-colors">{{ $t('nav.about') }}</router-link></li>
            <li><router-link to="/skin-aesthetic" class="hover:text-white transition-colors">{{ $t('nav.skinAesthetic') }}</router-link></li>
            <li><router-link to="/dental" class="hover:text-white transition-colors">{{ $t('nav.dentalTreatment') }}</router-link></li>
            <li><router-link to="/team" class="hover:text-white transition-colors">{{ $t('nav.team') }}</router-link></li>
            <li><router-link to="/gallery" class="hover:text-white transition-colors">{{ $t('nav.gallery') }}</router-link></li>
            <li><router-link to="/blog" class="hover:text-white transition-colors">{{ $t('nav.blog') }}</router-link></li>
            <li><router-link to="/career" class="hover:text-white transition-colors">{{ $t('nav.career') }}</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm uppercase tracking-[0.2em] text-white font-bold mb-8">{{ $t('footer.contactUs') }}</h3>
          <p class="text-white/80 font-light mb-4 leading-loose">
            {{ $t('location.addressLine1') }}<br>
            {{ $t('location.addressLine2') }}
          </p>
          <p class="text-white/80 font-light mb-6 leading-loose">
            <a :href="`tel:${$t('location.phoneNumber')}`" class="hover:text-white transition-colors block">{{ $t('location.phoneNumber') }}</a>
            <a :href="`mailto:${$t('location.emailAddress')}`" class="hover:text-white transition-colors block">{{ $t('location.emailAddress') }}</a>
          </p>
          <a href="#" class="inline-block border border-white/30 px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-white hover:text-primary hover:border-white transition-all">{{ $t('footer.getDirections') }}</a>
        </div>

        <!-- Hours -->
        <div>
          <h3 class="text-sm uppercase tracking-[0.2em] text-white font-bold mb-8">{{ $t('footer.hours') }}</h3>
          <ul class="text-white/80 font-light space-y-4">
             <li class="flex justify-between border-b border-white/10 pb-2"><span>{{ $t('footer.schedule.allDays') }}</span> <span>10:00 - 21:00</span></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-white/60 text-xs uppercase tracking-widest">
        <p>&copy; {{ new Date().getFullYear() }} Hana Clinic. {{ $t('footer.allRightsReserved') }}</p>
        <div class="mt-4 md:mt-0 space-x-6">
          <a href="#" class="hover:text-white">{{ $t('footer.privacyPolicy') }}</a>
          <a href="#" class="hover:text-white">{{ $t('footer.termsOfService') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
