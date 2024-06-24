import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { registerPlugins } from './plugins/index'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')