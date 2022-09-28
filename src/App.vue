<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
</script>

<template>
  <div id="main">
    <Navbar />
    <Main />
    <Footer />
  </div>
</template>

<style>
#main {
  margin: 0 auto;
  padding: 32px;
  font-weight: normal;
}
</style>