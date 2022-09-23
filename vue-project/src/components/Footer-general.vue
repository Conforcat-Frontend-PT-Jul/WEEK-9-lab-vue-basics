<script setup>
// export default {
//   data() {
//     return {};
//   },
// };
</script>

<template>
  <div class="footer-container">
    <p>
      this is an adress <br />
      with its city <br />
      and country
    </p>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
</template>

<style>
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 1rem;
  background-color: var(--vt-c-white-soft);
  color: #333;
  position: sticky;
  bottom: 0;
  width: 100;
}

ul {
  list-style: none;
}
</style>
