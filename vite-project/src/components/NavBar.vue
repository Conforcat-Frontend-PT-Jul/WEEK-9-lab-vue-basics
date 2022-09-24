<template>
  <div class="menu">
    <ul>
        <a href=""><li>About Us</li></a>
        <a href=""><li>Projects</li></a>
        <a href=""><li>Contact Us</li></a>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
    nav {
    display: flex;
    justify-content: center;
    padding: 1rem 1rem; 
    background: #9F1AF2;
    color:white;
      
    }
    nav ul {
      display: flex; 
      list-style: none; 
      width:100%;
    }
    nav li {
      padding-left: 1rem; 
    }
    </style>