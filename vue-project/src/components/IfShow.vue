<script>
export default {
  data() {
    return {
      IfShow: false,
    };
  },
};
</script>

<template>
  <h1>If Show</h1>
  <button @click="IfShow = !IfShow">Click here!</button>
  <br />
  <h3 v-if="IfShow">Now I'm shown! :D</h3>
  <h3 v-else></h3>
</template>
<style scoped></style>
