<script setup>
import navbar from './components/navbar.vue'
import FooterJosep from './components/FooterJosep.vue'
import iteration2 from './iterations/iteration2.vue'
</script>

<template>
  <navbar></navbar>

  <main>
    <h2 class="titles">Iteration 2</h2>
    <iteration2 />
  </main>


  <FooterJosep></FooterJosep>
</template>

<style scoped>
titles {
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>
