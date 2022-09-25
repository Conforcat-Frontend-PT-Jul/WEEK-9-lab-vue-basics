<script setup>
import Navbar from "./components/Nav-bar.vue";
import Footer from "./components/Footer-general.vue";
import Iterations from "./components/Iterations-all.vue";
</script>

<template>
  <Navbar />
  <Iterations />
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}
app {
  display: flex;
  flex-direction: column;
  padding: 0px 4rem 0px 0rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  #app {
    padding: 0px 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 4rem 0px 0rem;
  }

  header {
    display: flex;

    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
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
