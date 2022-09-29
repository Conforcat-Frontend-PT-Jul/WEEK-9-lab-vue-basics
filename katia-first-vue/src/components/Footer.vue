<template>
  <footer>
    <div class="footer-text">
      <address>
        2972 Westheimer Rd. Santa Ana,<br />
        Illinois 85486
      </address>
    </div>
    <div class="links-footer-grid-container">
      <a href="#" target="_blank">Team</a>
      <a href="#services-section" target="_blank">Services</a>
      <a href="#" target="_blank">About us</a>
      <a href="#" target="_blank">Press</a>
      <a href="pages\project-page.html" target="_blank">Projects</a>
      <a href="#" target="_blank">Privacy Policy</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 2em 3em 4em;
}

.circle-logo {
  width: 100px;
  margin-bottom: 1em;
}
address {
  font-style: normal;
  margin-bottom: 3em;
}

footer a {
  text-decoration: none;
  color: #6b708d;
}
footer a:hover {
  color: #292e47;
}

.links-footer-grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2em;
  column-gap: 2em;
}

@media only screen and (min-width: 900px) {
  /*FOOTER*/
  footer {
    width: 80%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  .links-footer-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2em;
    column-gap: 3em;
  }
}
</style>
