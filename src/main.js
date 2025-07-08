import './assets/main.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'

createApp(App).mount('#app')

const app = createApp(App)
app.use(PrimeVue, {
  theme: {},
})
