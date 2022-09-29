<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import HideAndShow from "./components/HideAndShow.vue";
import Titles from "./components/Titles.vue";
import { ref } from "vue";

const number = 3;
const name = "Katia";
function greetingKatia() {
  return `Hello ${name}!`;
}

const ok = true;
</script>

<template>
  <Navbar v-if="ok"></Navbar>
  <div v-else>Navbar desappeared</div>

  <br />
  <div>{{ number + 1 }}</div>
  <div>{{ greetingKatia() }}</div>
  <br />
  <HideAndShow></HideAndShow>
  <Titles></Titles>

  <Footer />
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
#changeBcg {
  background-color: aqua;
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
button {
  width: 70px;
  height: 40px;
}
</style>
