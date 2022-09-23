<script setup></script>

<template>
  <nav>
    <img src="./../assets/logo.svg" alt="logo" width="125" height="125" />
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
      v-if="!active"
      src="./../assets/logo.svg"
      alt="logo"
      width="125"
      height="125"
    />
  </nav>
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
