<script setup>
import Footerite from "./components/Footerite.vue";
import Navbarite from "./components/Navbarite.vue";
import MainSection from "./components/MainSection.vue";

/*import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";*/

</script>

<template>
  <header>
    <Navbarite />
  </header>

  <section>
    <MainSection />
  </section>
  
  <footer>
    <Footerite />
  </footer>
</template>

<style scoped>
/*header {
  line-height: 1.5;
}*/


/*@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }*/

  /*header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }*/

</style>
