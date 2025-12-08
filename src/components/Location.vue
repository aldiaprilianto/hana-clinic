<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="location" class="py-24 bg-surface">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h3 class="text-sm uppercase tracking-[0.2em] text-primary mb-4">{{ $t('location.visitUs') }}</h3>
        <h2 class="text-4xl md:text-5xl font-serif text-dark">{{ $t('location.title') }}</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Clinic Images Gallery -->
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="overflow-hidden rounded-2xl shadow-lg">
              <img src="/images/clinic/clinic12.png" alt="Clinic Reception" class="w-full h-64 object-cover hover:scale-110 transition-transform duration-700">
            </div>
            <div class="overflow-hidden rounded-2xl shadow-lg">
              <img src="/images/clinic/clinic13.png" alt="Treatment Room" class="w-full h-64 object-cover hover:scale-110 transition-transform duration-700">
            </div>
          </div>
          <div class="overflow-hidden rounded-2xl shadow-lg">
            <img src="/images/clinic/clinic14.png" alt="Clinic Interior" class="w-full h-80 object-cover hover:scale-110 transition-transform duration-700">
          </div>
        </div>

        <!-- Location Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-serif text-primary mb-4">Hana Clinic</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ $t('location.description') }}
            </p>
          </div>

          <!-- Contact Details -->
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark mb-1">{{ $t('location.address') }}</h4>
                <p class="text-gray-600">{{ $t('location.addressLine1') }}<br>{{ $t('location.addressLine2') }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark mb-1">{{ $t('location.phone') }}</h4>
                <a :href="`tel:${$t('location.phoneNumber')}`" class="text-primary hover:text-accent transition-colors block">{{ $t('location.phoneNumber') }}</a>
                <a :href="`mailto:${$t('location.emailAddress')}`" class="text-primary hover:text-accent transition-colors block mt-1">{{ $t('location.emailAddress') }}</a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark mb-1">{{ $t('location.hours') }}</h4>
                <div class="text-gray-600 space-y-1">
                  <p>{{ $t('footer.weekdays') }}: 9:00 AM - 8:00 PM</p>
                  <p>{{ $t('footer.saturday') }}: 9:00 AM - 6:00 PM</p>
                  <p>{{ $t('footer.sunday') }}: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Embed -->
          <div class="rounded-2xl overflow-hidden shadow-lg h-64">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2087595346!2d106.82065931476893!3d-6.232823895492953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJl.%20Jenderal%20Sudirman%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

          <a href="#contact" class="inline-block bg-primary text-white px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full text-center">
            {{ $t('location.getDirections') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
