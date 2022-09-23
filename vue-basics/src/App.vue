<script setup>
import Navbar from "./components/Navbar.vue";
import Foot from "./components/Foot.vue";
import Posts from "./components/Posts.vue";
</script>

<template>
  <header >
    <Navbar  />
      
  </header>

  <main>
    <Posts /> 
  </main>

  <footer>
      <Foot  />
  </footer>

</template>

<style scoped>
header {
  line-height: 1.5;
}

footer {
  line-height: 1.5;
  margin-bottom: 50px;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    
  }

footer {
    display: flex;
    justify-content: center;
    margin-top: 150px;
  }


}
</style>
