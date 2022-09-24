<script setup>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <header>
    <TheNavbar />
  </header>
  <footer>
    <TheFooter />
  </footer>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    margin-bottom: 3rem;
    line-height: 1.5;
  }
}
</style>
