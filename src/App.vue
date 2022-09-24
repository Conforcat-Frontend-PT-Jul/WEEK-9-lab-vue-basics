<script setup>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import TheIteration2 from "./iterations/iteration-2.vue";
import TheIteration3 from "./iterations/iteration-3.vue";
import TheIteration4 from "./iterations/iteration-4.vue";
import TheIteration5 from "./iterations/iteration-5.vue";
</script>

<template>
  <header>
    <TheNavbar />

    <div class="wrapper"></div>
  </header>

  <main class="wrapper">
    <TheIteration2 />

    <TheIteration3 />

    <TheIteration4 />

    <TheIteration5 />
  </main>

  <TheFooter />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    width: 100%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
