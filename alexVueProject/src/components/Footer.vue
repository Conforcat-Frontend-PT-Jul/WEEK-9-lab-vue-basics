<script>
export default {
    data() {
        return {
            op1: 'Team',
            op2: 'Services',
            op3: 'About Us',
            op4: 'Press',
            op5: 'Projects',
            op6: 'Privacy Policy'

        }
    }
}
</script>
    
<template>

    <footer>
        <div>
            <a href="index.html">
                <img id="logo" src="../assets/logo.svg">
            </a>
            <p class="headlineRegular">2972 Westheimer Rd. Santa Ana,</p>
            <p class="headlineRegular">Illinois 85486 </p>
        </div>

        <nav class="headlineRegular">
            <a href="#">{{ op1 }}</a>
            <a href="#">{{ op2 }}</a>
            <a href="#">{{ op3 }}</a>
            <a href="#">{{ op4 }}</a>
            <a href="#">{{ op5 }}</a>
            <a href="#">{{ op6 }}</a>
        </nav>
    </footer>

</template>
    
<style scoped>
nav {
     display: grid;
     grid-template-columns: auto auto auto;
     grid-gap: 10px 20px;

 }

 nav a,
 .headlineRegular {
     color: aliceblue;
 }

 img {
     padding-bottom: 10px;
     width: 40px;

 }

 .headlineRegular {
     font-size: 20px;
     font-weight: 400;
 }
</style>