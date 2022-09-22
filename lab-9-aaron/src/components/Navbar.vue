<template>
    <div class="navbar-container">
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar-component',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .navbar-container {
    height: 100px;
    width: 100vw;
    background-color: aqua;
    position: fixed;
    top: 0;
  }
  </style>
  