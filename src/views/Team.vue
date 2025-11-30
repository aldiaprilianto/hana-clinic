<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const team = ref([
  {
    id: 1,
    name: 'Dr. Sarah Kim',
    title: 'Chief Aesthetic Doctor',
    specialization: 'Korean Aesthetic Medicine',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
    bio: 'Specialized in Korean aesthetic treatments with over 10 years of experience. Trained in Seoul and certified in advanced injectable techniques.',
    expertise: ['Botox & Fillers', 'Thread Lifting', 'Laser Treatments', 'Anti-Aging']
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    title: 'Senior Dental Specialist',
    specialization: 'Aesthetic & Restorative Dentistry',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    bio: 'Expert in aesthetic dentistry and smile design. Committed to providing pain-free, beautiful dental solutions.',
    expertise: ['Smile Design', 'Veneers', 'Implants', 'Orthodontics']
  },
  {
    id: 3,
    name: 'Dr. Lisa Anderson',
    title: 'Aesthetic Physician',
    specialization: 'Dermatology & Laser Therapy',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop',
    bio: 'Dermatologist specializing in laser treatments and skin rejuvenation. Passionate about helping patients achieve healthy, glowing skin.',
    expertise: ['Laser Therapy', 'Acne Treatment', 'Skin Rejuvenation', 'Pigmentation']
  },
  {
    id: 4,
    name: 'Dr. James Park',
    title: 'Oral Surgeon',
    specialization: 'Oral & Maxillofacial Surgery',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2064&auto=format&fit=crop',
    bio: 'Experienced oral surgeon specializing in complex dental procedures and implant surgery.',
    expertise: ['Dental Implants', 'Wisdom Teeth', 'Jaw Surgery', 'Bone Grafting']
  },
  {
    id: 5,
    name: 'Dr. Emily Wong',
    title: 'Aesthetic Consultant',
    specialization: 'Non-Surgical Treatments',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop',
    bio: 'Specializes in non-surgical facial rejuvenation and body contouring treatments.',
    expertise: ['Body Contouring', 'Skinboosters', 'IV Therapy', 'Facial Treatments']
  },
  {
    id: 6,
    name: 'Dr. David Martinez',
    title: 'Orthodontist',
    specialization: 'Orthodontics & Alignment',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop',
    bio: 'Orthodontic specialist helping patients achieve perfectly aligned smiles with modern techniques.',
    expertise: ['Braces', 'Clear Aligners', 'Bite Correction', 'Retention']
  }
])
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-32 overflow-hidden">
      <!-- Batik Pattern Background -->
      <div class="absolute inset-0 opacity-20">
        <img src="/images/batik.jpeg" alt="" class="w-full h-full object-cover" />
      </div>
      
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
          <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{{ $t('team.title') }}</h1>
          <p class="text-xl text-white leading-relaxed drop-shadow-lg">{{ $t('team.subtitle') }}</p>
        </div>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- Team Grid -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif text-primary mb-4">{{ $t('team.worldClass') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('team.worldClassDescription') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            v-for="member in team"
            :key="member.id"
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30"
          >
            <!-- Photo -->
            <div class="relative aspect-[3/4] overflow-hidden">
              <img 
                :src="member.image" 
                :alt="member.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
              
              <!-- Name Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-2xl font-serif mb-1">{{ member.name }}</h3>
                <p class="text-accent text-sm font-semibold uppercase tracking-wider">{{ member.title }}</p>
              </div>
            </div>

            <!-- Info -->
            <div class="p-6">
              <div class="mb-4">
                <div class="text-xs uppercase tracking-wider text-gray-500 mb-2">{{ $t('team.specialization') }}</div>
                <div class="text-primary font-semibold">{{ member.specialization }}</div>
              </div>

              <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ member.bio }}</p>

              <div>
                <div class="text-xs uppercase tracking-wider text-gray-500 mb-3">{{ $t('team.expertise') }}</div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(skill, index) in member.expertise"
                    :key="index"
                    class="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-primary via-primary to-[#2a3f3f] text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-serif mb-6">{{ $t('team.scheduleConsultation') }}</h2>
        <p class="text-white/90 mb-10 max-w-2xl mx-auto text-lg">{{ $t('team.scheduleDescription') }}</p>
        <a href="/#contact" class="inline-block bg-accent text-primary px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_40px_rgba(197,160,89,0.6)] hover:scale-105">
          {{ $t('team.bookConsultation') }}
        </a>
      </div>
    </section>
  </div>
</template>
