<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>
        

<template>
    <div id="myBody">
        <footer class="footerSection">
            <section class="footerContainer">
                <article class="footerArticle">
                    <address>2972 Westheimer Rd. Santa Ana, Illinois 85486</address>
                </article>
                <article class="footerLinks">
                    <a href="/comimngSoon.html">Team</a>
                    <a href="/services.html">Services</a>
                    <a href="/comimngSoon.html">About Us</a>
                    <a href="/comimngSoon.html">Press</a>
                    <a href="/project.html">Project</a>
                    <a href="/comimngSoon.html">Privacy Policy</a>
                </article>
            </section>
        </footer>
    </div>
</template>
        
<style scoped>

#myBody {
    text-align: center;
    background-color: rgba(221, 208, 21, 0.868);
    width: 100wd;
    height: 120px;
}

.footerSection {
    display: flex;
    align-items: center;
    padding: 20px 30px;
    width: 100vw;
    text-decoration: none;    
    display: flex;
    justify-content: center;
}


.navMenu {
    display: flex;
    font-size: 14px;
    justify-content: right;
}

.navMenu li {
    list-style: none;
    display: inline-block;
    padding: 5px;
}

a {
    text-decoration: none;
    color: #6a6a72;

}

#nav-bar ul li a:hover {
    color: blue;
}


@media (min-width: 1024px) {}
</style>
