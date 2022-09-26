<template>
    <div id="navbarinfo">
      <nav>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">ContactUs</a>
      </nav>
    </div>
  </template>
  
  <style scoped>
  #navbarinfo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: blue;
    color: white;
    font-size: 1.5rem;
  }
  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  nav a {
    text-decoration: none;
    color: white;
    padding: 0px 20px 0px 20px;
  }
  nav a:hover {
    color: skyblue;
  }
  </style>