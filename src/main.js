import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';


import router from './assets/router'

import '../dashbord/css/custom.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'





const app=createApp(App)
const pinia = createPinia();
app.use(pinia)
app.use(router)
app.mount('#app')
