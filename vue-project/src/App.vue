<script setup>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MySum from './components/MySum.vue'
import MyTrue from './components/MyTrue.vue'
import MyLoops from './components/MyLoops.vue'

</script>


<template>
  <div>
    <MyHeader msg="Hello" />
    <MySum />
    <MyTrue/>
    <MyLoops/>
    <MyFooter />
  </div>
</template>


<!-- <style>

</style> -->


<!-- <style scoped>
html {
  display: flex;
  flex-direction: column;
}

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
}
</style> -->
