<script>
export default {
  data() {
    return {
      sumOperation2: 2 + 2
    }
  },
  methods: {
    sumItems(a, b) {
      return a + b
    }
  },
  mounted() {
    this.$el.textContent += 'aaaa'
  }
}
</script>

<template>
  <div class="sums">
    <p>Sum 1: {{ 2 + 2 }} / </p>
    <p>Sum 2: {{ sumOperation2 }} / </p>
    <p>Sum 3: {{ sumItems(2, 2) }} / </p>
  </div>
</template>

<style>
.sums {
  border: 1px solid grey;
  padding: 30px;
}
</style>
