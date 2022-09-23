<script>
import TheNavbar from "./components/navbar.vue";
import TheFooter from "./components/footer.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <TheNavbar />
    </div>
  </header>
  <main></main>
  <TheFooter />
</template>

<style scoped></style>
