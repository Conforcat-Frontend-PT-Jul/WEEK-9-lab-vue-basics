<script setup>
import navbar from './components/navbar.vue'
import FooterJosep from './components/FooterJosep.vue'
import iteration2 from '@/iterations/iteration2.vue'
import iteration3 from '@/iterations/iteration3.vue'
import iteration4 from '@/iterations/iteration4.vue'
</script>

<template>
  <navbar></navbar>

  <main>
    <h2 class="titles">Iteration 2</h2>
    <iteration2 />
    <h2 class="titles">Iteration 3</h2>
    <iteration3 />
    <h2 class="titles">Iteration 4 & 5</h2>
    <iteration4 />
  </main>


  <FooterJosep></FooterJosep>
</template>

<style scoped>
.titles {
  display: flex;
  justify-content: center;
}
</style>
