<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const openPositions = ref([
  {
    id: 1,
    title: 'Aesthetic Doctor',
    department: 'Medical',
    type: 'Full-time',
    location: 'Clinic',
    description: 'We are seeking an experienced aesthetic doctor to join our team. Must have expertise in Korean aesthetic treatments including injectables, laser procedures, and thread lifting.',
    requirements: [
      'Medical degree with valid license',
      'Minimum 2 years experience in aesthetic medicine',
      'Expertise in Botox, fillers, and thread lifting',
      'Excellent patient communication skills',
      'Passion for aesthetic medicine'
    ]
  },
  {
    id: 2,
    title: 'Dental Specialist',
    department: 'Dental',
    type: 'Full-time',
    location: 'Clinic',
    description: 'Join our dental team to provide comprehensive dental care including aesthetic dentistry, orthodontics, and oral surgery.',
    requirements: [
      'Dental degree with valid license',
      'Experience in aesthetic dentistry preferred',
      'Strong technical skills',
      'Patient-centered approach',
      'Team player with excellent communication'
    ]
  },
  {
    id: 3,
    title: 'Clinic Nurse',
    department: 'Medical',
    type: 'Full-time',
    location: 'Clinic',
    description: 'Experienced nurse to assist with aesthetic and dental procedures, patient care, and clinic operations.',
    requirements: [
      'Nursing degree with valid license',
      'Experience in aesthetic clinic preferred',
      'Strong organizational skills',
      'Excellent patient care abilities',
      'Ability to work in fast-paced environment'
    ]
  },
  {
    id: 4,
    title: 'Customer Service Representative',
    department: 'Administration',
    type: 'Full-time',
    location: 'Clinic',
    description: 'Front desk position managing appointments, customer inquiries, and providing excellent patient experience.',
    requirements: [
      'Excellent communication skills',
      'Experience in customer service',
      'Proficient in computer systems',
      'Professional appearance and demeanor',
      'Fluent in Indonesian and English'
    ]
  }
])

const benefits = ref([
  {
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages'
  },
  {
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    title: 'Professional Development',
    description: 'Continuous training and skill enhancement'
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Team Environment',
    description: 'Collaborative and supportive workplace'
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for staff'
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Flexible Schedule',
    description: 'Work-life balance support'
  },
  {
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    title: 'Career Growth',
    description: 'Clear advancement opportunities'
  }
])
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
          <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{{ $t('career.title') }}</h1>
          <p class="text-xl text-white leading-relaxed drop-shadow-lg">{{ $t('career.subtitle') }}</p>
        </div>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-surface">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif text-primary mb-4">{{ $t('career.whyWorkWithUs') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('career.whyDescription') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-accent/30"
          >
            <div class="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="benefit.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-serif text-primary mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif text-primary mb-4">{{ $t('career.openPositions') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('career.openDescription') }}</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div
            v-for="position in openPositions"
            :key="position.id"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
          >
            <div class="p-8">
              <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 class="text-2xl font-serif text-primary mb-2 group-hover:text-accent transition-colors">{{ position.title }}</h3>
                  <div class="flex flex-wrap gap-3">
                    <span class="inline-flex items-center gap-1 text-sm text-gray-600">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      {{ position.department }}
                    </span>
                    <span class="inline-flex items-center gap-1 text-sm text-gray-600">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ position.type }}
                    </span>
                    <span class="inline-flex items-center gap-1 text-sm text-gray-600">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {{ position.location }}
                    </span>
                  </div>
                </div>
                <a href="https://wa.me/6281386017622?text=Hi%2C%20I%27m%20interested%20in%20the%20position%20of%20" class="bg-accent text-primary px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300">
                  {{ $t('career.applyNow') }}
                </a>
              </div>

              <p class="text-gray-700 mb-6">{{ position.description }}</p>

              <div>
                <h4 class="font-semibold text-primary mb-3">{{ $t('career.requirements') }}</h4>
                <ul class="space-y-2">
                  <li
                    v-for="(req, index) in position.requirements"
                    :key="index"
                    class="flex items-start gap-2 text-gray-600"
                  >
                    <svg class="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span>{{ req }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-serif mb-6">{{ $t('career.dontSeePosition') }}</h2>
        <p class="text-white/90 mb-10 max-w-2xl mx-auto text-lg">{{ $t('career.dontSeeDescription') }}</p>
        <a href="https://wa.me/6281386017622?text=Hi%2C%20I%27d%20like%20to%20submit%20my%20resume%20for%20future%20opportunities" class="inline-block bg-accent text-primary px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_40px_rgba(197,160,89,0.6)] hover:scale-105">
          {{ $t('career.sendResume') }}
        </a>
      </div>
    </section>
  </div>
</template>
