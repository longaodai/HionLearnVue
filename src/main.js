import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwindcss/tailwind.css'

import registerFortAwesome from './assets/fortawesome/fortawesome'

const app = createApp(App)

registerFortAwesome(app)

app.use(router)

app.mount('#app')