<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="testimonials" class="py-24 bg-secondary relative overflow-hidden">
    <!-- Decorative background element -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h3 class="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">{{ $t('testimonials.patientStories') }}</h3>
        <h2 class="text-4xl md:text-5xl font-serif text-dark">{{ $t('testimonials.title') }}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div class="bg-white p-12 shadow-sm border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
          <div class="absolute top-6 right-8 text-6xl text-primary/10 font-serif">"</div>
          <div class="flex text-primary mb-6">
            <span v-for="i in 5" :key="i">★</span>
          </div>
          <p class="text-gray-600 font-light italic mb-8 leading-relaxed relative z-10">
            "{{ $t('testimonials.review1') }}"
          </p>
          <h4 class="font-serif text-lg text-dark">— Sarah M.</h4>
        </div>

        <div class="bg-white p-12 shadow-sm border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
          <div class="absolute top-6 right-8 text-6xl text-primary/10 font-serif">"</div>
          <div class="flex text-primary mb-6">
            <span v-for="i in 5" :key="i">★</span>
          </div>
          <p class="text-gray-600 font-light italic mb-8 leading-relaxed relative z-10">
            "{{ $t('testimonials.review2') }}"
          </p>
          <h4 class="font-serif text-lg text-dark">— Michael R.</h4>
        </div>
      </div>
      
      <div class="text-center mt-16">
        <a href="#" class="inline-block border-b border-dark pb-1 text-sm uppercase tracking-widest hover:text-primary hover:border-primary transition-colors">{{ $t('testimonials.readMore') }}</a>
      </div>
    </div>
  </section>
</template>
