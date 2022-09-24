<script setup>
import navbar from './components/navbar.vue'
import FooterJosep from './components/FooterJosep.vue'
import iteration2 from './Iterations/iteration2.vue'
</script>

<template>
  <header>
    <navbar></navbar>
  </header>

  <main>
    <iteration2>
    <h2 class="titles">Iteration 2</h2>
    </iteration2>
  </main>
  
  <footer>
    <FooterJosep></FooterJosep>
  </footer>
</template>

<style scoped>
titles {
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>
