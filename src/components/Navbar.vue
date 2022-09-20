<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <nav>
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    margin-bottom: 30px;
    color: hsla(160, 100%, 37%, 1);
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  li {
    padding: 0 20px;
  }
</style>