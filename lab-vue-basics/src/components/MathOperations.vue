<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
      <p>
        {{ num1 }} + {{ num2 }} = <span>{{ sum }}</span>
      </p>
    </header>
    <button @click="count++">Click me</button>
    <p v-if="count % 2">{{ count }} is odd</p>
    <p v-else class="background">{{ count }} is even</p>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "MathOperations",
  setup() {
    const num1 = 2;
    const num2 = 2;

    const count = ref(2);

    const sum = num1 + num2;
    return {
      title: "Math Operations",
      sum,
      count,
      num1,
      num2,
    };
  },
};
</script>

<style>
.background {
  color: green;
}
</style>
