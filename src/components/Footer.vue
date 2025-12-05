<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer id="contact" class="relative bg-primary text-white py-24 overflow-hidden">
    <!-- Batik Pattern Background -->
    <div class="absolute inset-0 opacity-5" style="background-image: url('/images/batik.jpeg'); background-size: auto; background-repeat: repeat; background-position: 0 0;"></div>
    
    <!-- Dark overlay to ensure text readability -->
    <div class="absolute inset-0 bg-primary/60"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div>
          <a href="#" class="inline-block mb-8">
            <img src="/images/logo.png" alt="Hana Clinic Logo" class="h-16 w-auto brightness-0 invert" />
          </a>
          <p class="text-gray-300 font-light leading-relaxed mb-8">
            {{ $t('footer.tagline') }}
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-white hover:text-accent transition-colors text-sm uppercase tracking-widest">Instagram</a>
            <a href="#" class="text-white hover:text-accent transition-colors text-sm uppercase tracking-widest">Facebook</a>
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
            Jl. Senopati No. 123, Kebayoran Baru<br>
            Jakarta Selatan, Indonesia 12190
          </p>
          <p class="text-white/80 font-light mb-6 leading-loose">
            <a href="tel:+6281386017622" class="hover:text-white transition-colors block">+62 813-8601-7622</a>
            <a href="mailto:hello@hanaclinic.id" class="hover:text-white transition-colors block">hello@hanaclinic.id</a>
          </p>
          <a href="#" class="inline-block border border-white/30 px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-white hover:text-primary hover:border-white transition-all">{{ $t('footer.getDirections') }}</a>
        </div>

        <!-- Hours -->
        <div>
          <h3 class="text-sm uppercase tracking-[0.2em] text-white font-bold mb-8">{{ $t('footer.hours') }}</h3>
          <ul class="text-white/80 font-light space-y-4">
            <li class="flex justify-between border-b border-white/10 pb-2"><span>{{ $t('footer.schedule.monThu') }}</span> <span>8:00 AM - 5:00 PM</span></li>
            <li class="flex justify-between border-b border-white/10 pb-2"><span>{{ $t('footer.schedule.friday') }}</span> <span>8:00 AM - 2:00 PM</span></li>
            <li class="flex justify-between border-b border-white/10 pb-2"><span>{{ $t('footer.schedule.satSun') }}</span> <span>{{ $t('footer.schedule.closed') }}</span></li>
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
