<script setup>
import { ref } from "vue";
const data = ref([
  { title: "One", description: "First title", content: "jhjhkjhljkhl" },
  { title: "Two", description: "Second title", content: "fdgg" },
  { title: "Three", description: "Third title", content: "hhh" },
  { title: "Four", description: "Fourth title", content: "kkk" },
]);
</script>

<template>
  <div>
    <li v-for="item in data">
      <h3>{{ item.title }}</h3>
      <h4>{{ item.description }}</h4>
      <p>{{ item.content }}</p>
    </li>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
