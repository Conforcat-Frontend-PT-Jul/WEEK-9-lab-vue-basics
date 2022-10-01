<template>
    <div class="footer-wrap">
        <nav>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
            <a href="#">Terms & Conditions</a>
        </nav>
    </div>
    <p class="copyright">Copyright 2022</p>
</template>
  
<style scoped>
.footer-wrap {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: darkcyan;
    color: white;
    font-size: 0.8rem;
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
    color: rgb(218, 190, 14);
}

.copyright {
    width: 100%;
    height: 60px;
    margin-top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: darkcyan;
    color: white;
    font-size: 0.8rem;
}
</style>