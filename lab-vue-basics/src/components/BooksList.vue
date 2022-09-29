<template>
  <div>
    <h2>List of books</h2>
    <li v-for="(book, index) in books" :key="index">
      <p>{{ book.title }}</p>
      <p>{{ book.author }}</p>
    </li>
  </div>
</template>

<script setup>
import { ref } from "vue";
const books = ref([
  { title: "name of the wind" },
  { author: "patrick rothfuss" },
  { title: "Harry Potter" },
  { author: "J.K. Rowling" },
  { title: "Death on the Nile" },
  { author: "Agatha Christie" },
]);
</script>

<style>
li {
  list-style: none;
}
.item {
  color: aquamarine;
}
</style>
