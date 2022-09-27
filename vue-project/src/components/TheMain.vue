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
  </script>
  
  <template>
    <div>

      <!-- ITERATION 2 -->
      <p>La suma es: {{ 2 + 2 }}</p>
      <p>La suma es: {{ sum }}</p>
    </div>
  </template>
  
  <style scoped></style>
