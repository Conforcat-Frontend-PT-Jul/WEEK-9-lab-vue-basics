import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

import { ref, onMounted } from "vue";

const suma = ref();

onMounted(() => {
  console.log(suma.value);
});
