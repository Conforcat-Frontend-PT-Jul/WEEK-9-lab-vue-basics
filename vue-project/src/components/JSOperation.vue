<template>
  <div id="JSOperation" class="section">
    <h1>JS Operation</h1>
    <div>2 + 2 via moustaches = {{ 2 + 2 }}</div>
    <div>2 + 2 via function = {{ jsOperation }}</div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "JSOperation",
  setup() {
    const firstOperand = ref(2);
    const secondOperand = ref(2);
    const jsOperation = computed(() => {
      return parseInt(firstOperand.value) + parseInt(secondOperand.value);
    });
    return {
      jsOperation,
    };
  },
};
</script>
