import { createApp } from 'vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(VueReCaptcha, { siteKey: "6Lf2mPQaAAAAAMdOKkzFaRgDYEJlW2puOve8g2Vg", loaderOptions: { useRecaptchaNet: true } }).mount('#app')
