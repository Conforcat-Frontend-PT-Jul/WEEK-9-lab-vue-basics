<script setup>
let home = "Home";
let projects = "Projects";
let contact = "Contact";

const message = "Post nº:";
const posts = [
  {
    title: "Montaña",
    description: "Sobre el senderismo",
    content: "Las 10 mejores rutas de montaña",
  },
  {
    title: "Playa",
    description: "Sobre veranear",
    content: "Los 10 mejores destinos en verano",
  },
  {
    title: "Campo",
    description: "Sobre el transporte en el campo",
    content: "Los 10 mejores tractores",
  },
];
</script>

<template>
  <nav>
    <ul>
      <li>{{ home }}</li>
      <li>{{ projects }}</li>
      <li>{{ contact }}</li>
    </ul>
  </nav>
  <ul>
    <li v-for="(post, index) in posts" :key="post.message">
      {{ message }} {{ index }}
      <ul>
        <li v-for="(value, name) in post" :key="value">
          {{ name }}: {{ value }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
@media (min-width: 1024px) {
  nav ul {
    display: flex;
    flex-direction: row;
  }
  nav ul li {
    list-style: none;
    padding: 1rem;
  }
}
</style>
