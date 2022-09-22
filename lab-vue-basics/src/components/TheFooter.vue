<script setup>
import { ref, onMounted } from "vue";

const mensaje = "Resultado en el footer:";
const suma = ref();
let isVisible = true;
let isActive = ref(true);

onMounted(() => {
  console.log(suma.value);
});

function changeColor() {
  isActive.value = !isActive.value;
}
</script>

<template>
  {{ mensaje }}
  <p ref="suma">{{ 2 + 2 }}</p>
  <h1 v-show="isVisible" :class="{ blackBackgroundColor: isActive }">
    Esto del Vue.js mola!
  </h1>
  <button @click="changeColor" type="button">
    Apretar para cambiar el recuadro de color
  </button>
</template>

<style scoped>
h1 {
  color: white;
  background-color: rgba(15, 112, 15, 0.719);
  padding: 1rem;
  text-align: center;
}
.blackBackgroundColor {
  background-color: black;
}
button {
  padding: 0.5rem;
  background-color: rgba(211, 219, 103, 0.877);
  border: none;
  border-radius: 5px;
  margin: 1rem auto;
  display: block;
  cursor: pointer;
}
</style>
