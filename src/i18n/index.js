import { createI18n } from 'vue-i18n'
import id from './locales/id'
import en from './locales/en'

// Get saved language from localStorage or default to Indonesian
const savedLocale = localStorage.getItem('locale') || 'id'

const i18n = createI18n({
    legacy: false, // Use Composition API mode
    locale: savedLocale, // Set default language
    fallbackLocale: 'en', // Fallback language
    messages: {
        id,
        en
    }
})

export default i18n
