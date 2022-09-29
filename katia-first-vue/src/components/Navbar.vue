<template>
  <div class="navbar">
    <img
      id="navbar-logo"
      src="../assets/logo.svg"
      alt="Circle logo"
      width="100"
      height="100"
    />
    <ul class="nav-list">
      <li><a href="#">Home</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Services</a></li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 1em;
}

.nav-list {
  display: flex;
  list-style-type: none;
  padding-left: 0;
}
.nav-list a {
  color: #6b708d;
  padding-left: 2em;
}
</style>
