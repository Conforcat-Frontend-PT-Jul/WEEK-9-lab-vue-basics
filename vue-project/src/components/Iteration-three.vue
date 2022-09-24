<script setup>
import { ref } from "vue";
const message = "2 + 2 = ";
const visible = ref(true);
</script>

<template>
  <button @click="visible = !visible">See & hide message</button>

  <h1 v-if="visible">Hello, now you can see me...!</h1>
</template>
