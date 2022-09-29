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

@media only screen and (min-width: 900px) {
  h1 {
    font-size: 60px;
    margin-bottom: 0;
  }

  h2 {
    font-size: 40px;
  }
  h3,
  q {
    font-size: 24px;
    line-height: 28px;
    color: #6b708d;
  }
  p {
    font-size: 17px;
  }

  .strong {
    color: #292e47;
  }
  .strong span {
    color: #6b708d;
    font-size: 17px;
  }

  .navbar {
    width: 80%;
    text-shadow: -1px 6px 5px rgba(107, 112, 141, 0.7);
  }

  #navbar-logo {
    filter: drop-shadow(-1px 6px 5px rgba(107, 112, 141, 0.7));
  }
}
</style>
