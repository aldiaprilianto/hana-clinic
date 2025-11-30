<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="equipment" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20">
        <h3 class="text-sm uppercase tracking-[0.2em] text-primary mb-4">{{ $t('equipment.koreanTech') }}</h3>
        <h2 class="text-4xl md:text-5xl font-serif text-dark mb-6">{{ $t('equipment.title') }}</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('equipment.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Ultherapy Prime -->
        <div class="group bg-surface p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="mb-6 overflow-hidden rounded-xl bg-white p-4">
            <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop" alt="Ultherapy" class="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-700">
          </div>
          <h3 class="text-2xl font-serif mb-3 text-primary">{{ $t('equipment.ultherapy.title') }}</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">{{ $t('equipment.ultherapy.description') }}</p>
          <div class="text-xs uppercase tracking-widest text-accent font-bold">{{ $t('equipment.ultherapy.tag') }}</div>
        </div>

        <!-- Thermage FLX -->
        <div class="group bg-surface p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="mb-6 overflow-hidden rounded-xl bg-white p-4">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Thermage FLX" class="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-700">
          </div>
          <h3 class="text-2xl font-serif mb-3 text-primary">{{ $t('equipment.thermage.title') }}</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">{{ $t('equipment.thermage.description') }}</p>
          <div class="text-xs uppercase tracking-widest text-accent font-bold">{{ $t('equipment.thermage.tag') }}</div>
        </div>

        <!-- Linear Z -->
        <div class="group bg-surface p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="mb-6 overflow-hidden rounded-xl bg-white p-4">
            <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Linear Z" class="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-700">
          </div>
          <h3 class="text-2xl font-serif mb-3 text-primary">{{ $t('equipment.linearz.title') }}</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">{{ $t('equipment.linearz.description') }}</p>
          <div class="text-xs uppercase tracking-widest text-accent font-bold">{{ $t('equipment.linearz.tag') }}</div>
        </div>

        <!-- Oligio -->
        <div class="group bg-surface p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="mb-6 overflow-hidden rounded-xl bg-white p-4">
            <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2070&auto=format&fit=crop" alt="Oligio" class="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-700">
          </div>
          <h3 class="text-2xl font-serif mb-3 text-primary">{{ $t('equipment.oligio.title') }}</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">{{ $t('equipment.oligio.description') }}</p>
          <div class="text-xs uppercase tracking-widest text-accent font-bold">{{ $t('equipment.oligio.tag') }}</div>
        </div>
      </div>

      <!-- Additional Equipment Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
        <!-- Volnewmer -->
        <div class="group bg-surface p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="mb-6 overflow-hidden rounded-xl bg-white p-4">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" alt="Volnewmer" class="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-700">
          </div>
          <h3 class="text-2xl font-serif mb-3 text-primary">{{ $t('equipment.volnewmer.title') }}</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">{{ $t('equipment.volnewmer.description') }}</p>
          <div class="text-xs uppercase tracking-widest text-accent font-bold">{{ $t('equipment.volnewmer.tag') }}</div>
        </div>

        <!-- HIFU -->
        <div class="group bg-surface p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="mb-6 overflow-hidden rounded-xl bg-white p-4">
            <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop" alt="HIFU" class="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-700">
          </div>
          <h3 class="text-2xl font-serif mb-3 text-primary">{{ $t('equipment.hifu.title') }}</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">{{ $t('equipment.hifu.description') }}</p>
          <div class="text-xs uppercase tracking-widest text-accent font-bold">{{ $t('equipment.hifu.tag') }}</div>
        </div>

        <!-- Skin Boosters -->
        <div class="group bg-surface p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="mb-6 overflow-hidden rounded-xl bg-white p-4">
            <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=2070&auto=format&fit=crop" alt="Skin Boosters" class="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-700">
          </div>
          <h3 class="text-2xl font-serif mb-3 text-primary">{{ $t('equipment.skinboosters.title') }}</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">{{ $t('equipment.skinboosters.description') }}</p>
          <div class="text-xs uppercase tracking-widest text-accent font-bold">{{ $t('equipment.skinboosters.tag') }}</div>
        </div>
      </div>

      <div class="text-center mt-16">
        <a href="#contact" class="inline-block bg-primary text-white px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          {{ $t('equipment.scheduleConsultation') }}
        </a>
      </div>
    </div>
  </section>
</template>
