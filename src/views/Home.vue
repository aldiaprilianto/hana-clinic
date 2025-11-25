<script setup>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import PromoBanner from '../components/PromoBanner.vue'
import Services from '../components/Services.vue'
import Equipment from '../components/Equipment.vue'
import About from '../components/About.vue'
import Testimonials from '../components/Testimonials.vue'
import Location from '../components/Location.vue'
import Footer from '../components/Footer.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <Hero />
      <PromoBanner />
      <Services />
      <Equipment />
      <PromoBanner />
      <About />
      <Testimonials />
      <Location />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>
