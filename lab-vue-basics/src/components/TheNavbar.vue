<script setup>
let home = "Home";
let projects = "Projects";
let contact = "Contact";
</script>

<template>
  <nav>
    <li>{{ home }}</li>
    <li>{{ projects }}</li>
    <li>{{ contact }}</li>
  </nav>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
