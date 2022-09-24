<template>
  <nav class="sticky-menu" :class="{ sticking }">
    <img
      alt="Vue logo"
      class="logo"
      src="../assets/logo.svg"
      width="35"
      height="35"
    />

    <ul>
      <li v-for="link in links" :key="link">
        <a :href="link.href">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
//create function adn make the navbar sticky vue3
export default {
  name: "TheNavbar",
  data() {
    return {
      sticking: false,
      links: [
        { name: "Iteration 2", href: "#iteration2" },
        { name: "Iteration 3", href: "#iteration3" },
        { name: "Iteration 4", href: "#iteration4" },
        { name: "Iteration 5", href: "#iteration5" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.sticking = window.scrollY > 0;
    },
  },
};
</script>

<style>
nav {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

nav li {
  margin: 0 1rem;
}

nav a {
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  color: #ccc;
}

.sticking {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
