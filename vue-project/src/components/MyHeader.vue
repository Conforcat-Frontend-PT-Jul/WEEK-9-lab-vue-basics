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
        <nav id="navBar">
            <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
            <ul class="navMenu">
                <li class="menu">
                    <a href="/">Home</a>
                </li>
                <li class="menu">
                    <a href="#">Project</a>
                </li>
                <li class="menu">
                    <a href="#">Services</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
    
<style scoped>

#myBody {
    text-align: center;
    color: aliceblue;
    background-color: rgb(84, 9, 63);
    width: 100;
    height: 180px;
}

#navBar {
    width: 100vw;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul {

    list-style: none;
}

li {
    float: left;
    margin-right: 15px;
}

a {
    text-decoration: none;
    color: aliceblue;
}
</style>
    