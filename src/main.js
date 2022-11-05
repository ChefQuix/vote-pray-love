import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App).mount('#app')

app.provide(`$API_URL`,`https://data.winnipeg.ca/resource/f9mn-vti8.json`);
