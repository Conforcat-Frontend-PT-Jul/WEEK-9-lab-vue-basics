<template>
  <div id="iteration2" class="section">
    <h1 class="green">Iteration 2</h1>
    <p>Sum of 2 + 2 simple = {{ 2 + 2 }}</p>
    <p>Sum of 2 + 2 computed = {{ sum }}</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "TheIteration2",
  setup() {
    const number1 = ref(2);
    const number2 = ref(2);

    const sum = computed(() => {
      return parseInt(number1.value) + parseInt(number2.value);
    });

    return {
      sum,
    };
  },
};
</script>
