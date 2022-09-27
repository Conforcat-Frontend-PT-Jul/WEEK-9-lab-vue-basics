<script setup>
import TheFooter from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import JSOperation from "./components/JSOperation.vue";
import IfShow from "./components/IfShow.vue";
import ForLoop from "./components/ForLoop.vue";
</script>

<template>
  <header>
    <NavBar />
    <br />
    <div class="wrapper"></div>
  </header>

  <main class="wrapper">
    <JSOperation />
    <br />
    <IfShow />
    <br />
    <ForLoop />
    <br />
  </main>

  <TheFooter />
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
