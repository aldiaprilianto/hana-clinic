<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <router-view></router-view>
    <Footer />
    <WhatsAppButton />
  </div>
</template>
