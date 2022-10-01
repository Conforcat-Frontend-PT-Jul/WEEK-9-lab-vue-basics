<template>
    <div class="navbar-wrap">
      <nav>
        <a href="#">Page 1</a>
        <a href="#">Page 2</a>
        <a href="#">Page 3</a>
      </nav>
    </div>
  </template>
  
  <style scoped>
  .navbar-wrap {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(205, 135, 102);
    color: white;
    font-size: 1.5rem;
  }
  nav {
    display: flex;
    width: 30%;
    justify-content: space-between;
  }
  nav a {
    text-decoration: none;
    color: white;
  }
  nav a:hover {
    color: rgb(71, 59, 209);
  }
  </style>