<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Navbar from "./components/Nav-bar.vue";
import Footer from "./components/Footer-bar.vue";
import Iteration2 from "./components/Iteration-two.vue";
import Iteration3 from "./components/Iteration-three.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it well!" /> -->
    </div>
  </header>
  <Navbar />
  <main>
    <Iteration2 />
    <iteration3 />
    <!-- <TheWelcome /> -->
  </main>
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
  margin-top: 30px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
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
