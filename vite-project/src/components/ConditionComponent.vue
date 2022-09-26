<template>
    <div>
      <button @click='theme = !theme'>Toggle</button>
      <h2 v-if='theme'>Light!</h2>
      <h2 v-else>Dark!</h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        theme: true,
      };
    },
  };
  </script>