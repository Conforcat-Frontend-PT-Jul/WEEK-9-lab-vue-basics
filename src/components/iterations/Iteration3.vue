<script>
export default {
  data() {
    return {
      vIfDiv: true,
      vShowDiv: true
    }
  },
  methods: {
    changevIfDiv() { this.vIfDiv = !this.vIfDiv },
    changevShowDiv() { this.vShowDiv = !this.vShowDiv }
  }
}
</script>

<template>
    <div>
      <p v-if="vIfDiv">Part 1.1: The variable vIfDiv is {{ vIfDiv }}</p>
      <p v-else>Part 1.2: The variable vIfDiv is {{ vIfDiv }}</p>
      <button @click="changevIfDiv()">Change vIfDiv</button>
    </div>
    <div>
      <p v-show="vShowDiv">Part 2.1: The variable vIfDiv is {{ vShowDiv }}</p>
      <p v-show="!vShowDiv">Part 2.2: The variable vIfDiv is {{ vShowDiv }}</p>
      <button @click="changevShowDiv()">Change vShowDiv</button>
    </div>
</template>

<style scoped>
div {
  margin: 15px 0;
}
</style>
