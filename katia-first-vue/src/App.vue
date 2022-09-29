<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

// const message = "";
</script>

<template>
  <Navbar></Navbar>
  <span>{{ 2 + 5 }}</span>
  <Footer></Footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f2f4fc;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-size: 30px;
  font-weight: 700;
  color: #292e47;
}
h2 {
  font-size: 25px;
  font-weight: 700;
  color: #292e47;
}
h3,
q {
  font-size: 20px;
  font-weight: 500;
}
p {
  font-weight: 400;
  color: #6b708d;
}
a {
  font-weight: 500;
  text-decoration: none;
}
</style>
