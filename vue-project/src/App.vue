<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheMain from "./components/TheMain.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheMain,
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
  <main>
    <TheMain />
  </main>
  <TheFooter />
</template>

<style scoped></style>
