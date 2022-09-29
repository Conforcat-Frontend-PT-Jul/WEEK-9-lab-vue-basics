<script>
export default {
  data() {
    return {
      ok: true,
    };
  },
};
</script>

<template>
  <button @click="ok = !ok">toggle</button>

  <h1 v-if="ok">Show me!</h1>
  <h1 v-else>Hide me</h1>
</template>
