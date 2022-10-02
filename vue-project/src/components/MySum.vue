<script setup>
import { computed } from 'vue'
const num1 = 2;
const num2 = 2;

let result = (num1 + num2);
const printString = computed(() => {
    return 'quería pegar el result aqui pero no pude';
});
</script>
        
<template>

    <div id="myBody">
        <h1>{{result}}</h1>
        <h2>{{printString}}</h2>
    </div>

</template>
        
<style scoped>
#myBody {
    text-align: center;
    color: aliceblue;
    background-color: black;
    width: 100vw;
    height: 150px;
}

h1 {
    font-size: 50px;
    color: blueviolet;
}
</style>
        