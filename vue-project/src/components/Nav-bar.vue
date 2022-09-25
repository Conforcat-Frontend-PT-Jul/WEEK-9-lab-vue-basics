<script setup>
import { ref } from "vue";
const hideMe = ref(true);
</script>

<template>
  <nav>
    <img
      src="./../assets/logo.svg"
      alt="logo"
      width="125"
      height="125"
      @click="hideMe = !hideMe"
    />
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
    <img
      v-if="hideMe"
      src="./../assets/logo.svg"
      alt="logo"
      width="125"
      height="125"
    />
  </nav>

  <h1 v-if="hideMe">click 👆🏻 the logo</h1>
</template>

<style scoped>
nav {
  color: #333;
  padding: 1rem;
  width: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

h1 {
  font-size: 1.5rem;
}

ul {
  display: contents;
}

li {
  list-style: none;
}
</style>
