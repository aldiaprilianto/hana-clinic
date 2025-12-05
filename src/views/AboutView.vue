<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
          alt="Hana Clinic Interior" 
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">{{ $t('aboutUs.title') }}</h1>
        <p class="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">{{ $t('aboutUs.subtitle') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
          <div class="lg:w-1/2">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                alt="Clinic Atmosphere" 
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              >
            </div>
          </div>
          <div class="lg:w-1/2">
            <h2 class="text-4xl font-serif text-primary mb-8">{{ $t('aboutUs.storyTitle') }}</h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              {{ $t('aboutUs.description') }}
            </p>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              {{ $t('aboutUs.description2') }}
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-surface p-6 rounded-xl border border-gray-100">
                <h3 class="font-serif text-xl text-primary mb-3">{{ $t('aboutUs.mission') }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ $t('aboutUs.missionText') }}</p>
              </div>
              <div class="bg-surface p-6 rounded-xl border border-gray-100">
                <h3 class="font-serif text-xl text-primary mb-3">{{ $t('aboutUs.vision') }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ $t('aboutUs.visionText') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-surface relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif text-primary mb-4">{{ $t('aboutUs.whyChooseUs') }}</h2>
          <div class="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div class="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-serif text-primary mb-4">{{ $t('aboutUs.expertTeam') }}</h3>
            <p class="text-gray-600">{{ $t('aboutUs.expertTeamDesc') }}</p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div class="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-serif text-primary mb-4">{{ $t('aboutUs.modernTech') }}</h3>
            <p class="text-gray-600">{{ $t('aboutUs.modernTechDesc') }}</p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div class="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-serif text-primary mb-4">{{ $t('aboutUs.patientCare') }}</h3>
            <p class="text-gray-600">{{ $t('aboutUs.patientCareDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-primary text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: url('/images/batik.jpeg'); background-size: cover;"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">15+</div>
            <div class="text-sm uppercase tracking-widest opacity-80">{{ $t('aboutUs.yearsExp') }}</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">5k+</div>
            <div class="text-sm uppercase tracking-widest opacity-80">{{ $t('aboutUs.happyPatients') }}</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">20+</div>
            <div class="text-sm uppercase tracking-widest opacity-80">{{ $t('aboutUs.treatments') }}</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">10+</div>
            <div class="text-sm uppercase tracking-widest opacity-80">{{ $t('aboutUs.awards') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-serif text-primary mb-8">{{ $t('aboutUs.readyToVisit') }}</h2>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <router-link to="/team" class="px-8 py-3 bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full uppercase tracking-widest text-sm font-bold">
            {{ $t('nav.team') }}
          </router-link>
          <a href="https://wa.me/6281386017622" target="_blank" class="px-8 py-3 bg-accent text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full uppercase tracking-widest text-sm font-bold shadow-lg">
            {{ $t('nav.bookAppointment') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
