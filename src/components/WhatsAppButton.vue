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
  const url = `https://wa.me/6281386017622?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
  
  // Reset form
  name.value = ''
  message.value = ''
  isOpen.value = false
}
</script>

<template>
  <div class="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
    <!-- Chat Modal -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-4 opacity-0 scale-95"
    >
      <div v-if="isOpen" class="mb-4 w-[350px] bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col">
        <!-- Header -->
        <div class="bg-[#075E54] p-4 flex items-center gap-3 relative overflow-hidden">
          <!-- Decorative circles -->
          <div class="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
          <div class="absolute top-8 right-8 w-8 h-8 bg-white/5 rounded-full"></div>
          
          <div class="relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
            <img src="/images/logo.png" alt="Hana Clinic" class="w-8 h-8 object-contain" />
          </div>
          <div class="relative z-10 flex-1">
            <h3 class="text-white font-bold text-base">{{ $t('whatsapp.support') }}</h3>
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
              <p class="text-white/90 text-xs font-medium">{{ $t('whatsapp.replyTime') }}</p>
            </div>
          </div>
          <button @click="isOpen = false" class="relative z-10 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-4 bg-[#E5DDD5] h-72 overflow-y-auto flex flex-col gap-4 bg-opacity-30" style="background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'); background-blend-mode: overlay;">
          <div class="flex flex-col gap-1 max-w-[85%] self-start">
            <div class="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-sm text-gray-800 relative">
              {{ $t('whatsapp.welcomeMessage') }}
              <span class="absolute top-0 left-[-8px] w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></span>
            </div>
            <span class="text-[10px] text-gray-500 ml-1">{{ new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }}</span>
          </div>
        </div>

        <!-- Footer/Form -->
        <div class="p-4 bg-white border-t border-gray-100">
          <div class="space-y-3">
            <input 
              v-model="name"
              type="text" 
              :placeholder="$t('whatsapp.placeholder').replace('...', ' Name...')" 
              class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 border-none transition-all"
            >
            <div class="relative">
              <textarea 
                v-model="message"
                :placeholder="$t('whatsapp.placeholder')" 
                rows="2"
                class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 border-none resize-none transition-all pr-10"
              ></textarea>
              <button 
                @click="sendMessage"
                class="absolute bottom-3 right-3 text-[#075E54] hover:text-[#25D366] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="!name || !message"
              >
                <svg class="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
          <button 
            @click="sendMessage"
            class="w-full mt-3 bg-[#25D366] text-white py-3 rounded-xl text-sm font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>{{ $t('whatsapp.startChat') }}</span>
          </button>
        </div>
      </div>
    </transition>

    <!-- Floating Button -->
    <button 
      @click="toggleChat"
      class="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 z-50"
    >
      <span class="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform rotate-90 opacity-0"
        enter-to-class="transform rotate-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform rotate-0 opacity-100"
        leave-to-class="transform rotate-90 opacity-0"
        mode="out-in"
      >
        <svg v-if="!isOpen" class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <svg v-else class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </transition>
    </button>
  </div>
</template>
