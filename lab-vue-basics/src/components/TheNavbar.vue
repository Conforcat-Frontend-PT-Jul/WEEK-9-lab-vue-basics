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
      <li>
        <a href="#">{{ home }}</a>
      </li>
      <li>
        <a href="#">{{ projects }}</a>
      </li>
      <li>
        <a href="#">{{ contact }}</a>
      </li>
    </ul>
  </nav>
  <ul>
    <li v-for="(post, index) in posts" :key="index">
      {{ message }} {{ index }}
      <ul>
        <li v-for="(value, name) in post" :key="name">
          {{ name }}: {{ value }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
nav {
  width: 100%;
  box-sizing: border-box;
}
@media (min-width: 1024px) {
  nav {
    background-color: antiquewhite;
  }
  nav ul {
    display: flex;
    flex-direction: row;
  }
  nav ul li {
    list-style: none;
    padding: 1rem;
  }
  a {
    text-decoration: none;
    color: rgba(51, 63, 63, 0.897);
  }
  a:hover {
    font-weight: bolder;
  }
}
</style>
