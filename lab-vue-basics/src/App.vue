<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="position">
    <header>
      <TheNavbar />
    </header>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .position {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
  }
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin: 3rem;
  }
}
</style>
