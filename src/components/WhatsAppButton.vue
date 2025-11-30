<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isOpen = ref(false)
const name = ref('')
const message = ref('')

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const sendMessage = () => {
  if (!name.value || !message.value) return
  
  const text = `${t('whatsapp.greeting')} ${name.value}. ${message.value}`
  const url = `https://wa.me/6282336427407?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
  
  // Reset form
  name.value = ''
  message.value = ''
  isOpen.value = false
}
</script>

<template>
  <div class="fixed bottom-8 right-8 z-50 flex flex-col items-end">
    <!-- Chat Modal -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-4 opacity-0 scale-95"
    >
      <div v-if="isOpen" class="mb-4 w-80 glass rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
        <!-- Header -->
        <div class="bg-primary/90 backdrop-blur-md p-4 flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-white font-medium text-sm">{{ $t('whatsapp.support') }}</h3>
            <p class="text-white/80 text-xs">{{ $t('whatsapp.replyTime') }}</p>
          </div>
          <button @click="isOpen = false" class="ml-auto text-white/80 hover:text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-4 bg-white/80 backdrop-blur-sm h-64 overflow-y-auto flex flex-col gap-3">
          <div class="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm max-w-[85%] self-start text-sm text-gray-600">
            {{ $t('whatsapp.welcomeMessage') }}
          </div>
        </div>

        <!-- Footer/Form -->
        <div class="p-4 bg-white border-t border-gray-100">
          <input 
            v-model="name"
            type="text" 
            :placeholder="$t('whatsapp.namePlaceholder')" 
            class="w-full mb-2 px-3 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          >
          <textarea 
            v-model="message"
            :placeholder="$t('whatsapp.messagePlaceholder')" 
            rows="2"
            class="w-full mb-2 px-3 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          ></textarea>
          <button 
            @click="sendMessage"
            class="w-full bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <span>{{ $t('whatsapp.startChat') }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>

    <!-- Floating Button -->
    <button 
      @mouseenter="isOpen = true"
      class="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
    >
      <span class="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
      </svg>
    </button>
  </div>
</template>
