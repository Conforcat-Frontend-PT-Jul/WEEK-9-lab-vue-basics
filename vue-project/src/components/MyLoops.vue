<script setup>
import { ref } from "vue";
const data = ref([
    { title: "movieOne", 
    description: "Lorem ipsum dolor, illum magni nobis alias? Necessitatibus, doloribus!", 
    content: "contentOne" },
    { title: "movieTwo", 
    description: "Lorem ipsum dolor, soluta quam tenetur facere, corrupti animi magnam nulla saepe perferendis incidunt, illum magni nobis alias? Necessitatibus, doloribus!", 
    content: "contentTow" },
    { title: "movieThree",     
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. , illum magni nobis alias? Necessitatibus, doloribus!", 
    content: "contentThree" },
    { title: "movieFour", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. , doloribus!", 
    content: "contentFour" },
]);
</script>
            
<template>
    <div id="myBody">
        <li v-for="item in data">
            <p>{{ item.title }}</p>
            <p>{{ item.description }}</p>
            <p>{{ item.content }}</p>
        </li>
    </div>
</template>
            
<style scoped>
#myBody {
    text-align: center;
    color: aliceblue;
    background-color: rgb(74, 48, 69);
    width: 100vw;
    height: 600px;
}
li {    
    text-decoration: none;
}

h1 {
    font-size: 50px;
    color: white;
}
</style>
            


