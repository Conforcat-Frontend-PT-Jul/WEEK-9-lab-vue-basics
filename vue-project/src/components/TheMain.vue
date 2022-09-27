<script>
import { ref, computed } from "vue";

export default {
  name: "TheMain",
  setup() {
// ITERATION 2
    const number1 = 2;
    const number2 = 2;
    const sum = computed(() => {
      return parseInt(number1) + parseInt(number2);
    });
    return {
      sum,
    };
  },
};

// ITERATION 3

const cool = ref(false);

</script>

<template>
  <div>
    <!-- ITERATION 2 -->
    <p>La suma es: {{ 2 + 2 }}</p>
    <p>La suma es: {{ sum }}</p>

    <!-- ITERATION 3 -->
    <button @click="cool = !cool">Toggle</button>
    <h1 v-if="cool">Vue is cool!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>

<style scoped></style>
