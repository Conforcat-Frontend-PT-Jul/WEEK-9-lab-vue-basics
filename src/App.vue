<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import Iteration2 from './components/iterations/Iteration2.vue'
import Iteration3 from './components/iterations/Iteration3.vue'
import Iteration4and5 from './components/iterations/Iteration4and5.vue'
</script>

<template>
  <Navbar />
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="WEEK-9-lab-vue-basics" />
    </div>
  </header>

  <main>
    <h2>Iteration 2</h2>
    <Iteration2 />
    <h2>Iteration 3</h2>
    <Iteration3 />
    <h2>Iteration 4 & 5</h2>
    <Iteration4and5 />
  </main>

  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
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

  h2 {
    margin: 40px 0 20px;
    font-size: 30px;
  }
}
</style>
