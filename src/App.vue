<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import Testimonials from './components/Testimonials.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <Hero />
      <Services />
      <About />
      <Testimonials />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>
