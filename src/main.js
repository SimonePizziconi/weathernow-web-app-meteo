import { createApp } from 'vue'
import App from './App.vue'

// Importa il router
import router from './router'


// Importa scss
import "./assets/styles/general.scss"


createApp(App).mount('#app')
App.use(router);
