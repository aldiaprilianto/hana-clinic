<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-16">
        <div class="w-full md:w-1/2">
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-full h-full border border-primary/30 z-0"></div>
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" alt="Dr. Hana" class="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-lg">
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <h3 class="text-sm uppercase tracking-[0.2em] text-primary mb-4">{{ $t('about.meetDrHana') }}</h3>
          <h2 class="text-4xl md:text-5xl font-serif text-dark mb-8">{{ $t('about.title') }}</h2>
          <p class="text-gray-600 leading-relaxed mb-6 font-light text-lg italic border-l-2 border-primary pl-6">
            "{{ $t('about.quote') }}"
          </p>
          <p class="text-gray-600 leading-relaxed mb-8 font-light">
            {{ $t('about.description1') }}
          </p>
          <p class="text-gray-600 leading-relaxed mb-8 font-light">
            {{ $t('about.description2') }}
          </p>
          <a href="#contact" class="bg-dark text-white px-8 py-4 hover:bg-primary transition-colors uppercase tracking-widest text-xs font-medium inline-block">
            {{ $t('about.readFullBio') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
