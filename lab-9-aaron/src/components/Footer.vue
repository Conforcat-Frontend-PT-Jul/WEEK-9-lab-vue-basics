<template>
    <div class="footer-container">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer-component',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .footer-container {
    height: 100px;
    width: 100vw;
    background-color: blueviolet;
    position: fixed;
    bottom: 0;
  }
  </style>
  