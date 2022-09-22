<template>
  <div class="navbar-wrapper">
    <nav>
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  </div>
</template>

<style scoped>
.navbar-wrapper {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: mediumaquamarine;
  color: white;
  font-size: 1.5rem;
}

nav {
  display: flex;
  width: 50%;
  justify-content: space-between;
}

nav a {
  text-decoration: none;
  color: white;
}

nav a:hover {
  color: aquamarine;
}
</style>
