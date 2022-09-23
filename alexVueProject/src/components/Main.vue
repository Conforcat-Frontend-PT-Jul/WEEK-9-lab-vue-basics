<script setup>
import { ref, onMounted, computed } from 'vue'

// Iteration 2 
let result = ref(2 + 2);

const printText = computed(() => {
    return 'TEXTO DESDE FUNCION COMPUTED'
})

// Iteration 3
let active = ref(true);

// Iteration 4
const posts = ref([
    {
        title: 'Post title 1',
        description: 'I\'m a description',
        content: 'And me, the content'
    },
    {
        title: 'Post title 2',
        description: 'This is another description',
        content: 'Content number 2'
    },
    {
        title: 'Post title 3',
        description: 'And the last description',
        content: 'Content number 3'
    }
])//posts

//Iteration 5

let isActive = ref(true);
function changeColor() {
    this.isActive = !this.isActive;
}



</script>
        
<template>

    <div>
        <h2>Iteration 2</h2>
        <h3>Display the result of a Javascript operation in a component's HTML</h3>
        <p class="headlineRegular">-- Insert a mathematical operation inside your HTML</p>
        <p class="headlineRegular">Result: {{result}}</p>
        <br>
        <p class="headlineRegular">-- Print a string returned by a function:</p>
        <p>{{ printText }}</p>

        <br>
        <hr>
        <h2>Iteration 3</h2>
        <h3>Show an element only if a particular property is set to true</h3>

        <div v-if="active">
            <pre>Hide and seek, using v-if!</pre>
        </div>
        <div v-show="active">
            <pre>Hide and seek, using v-show!</pre>
        </div>
        <button @click="active = !active">Click me!</button>

        <br>
        <hr>
        <h2>Iteration 4</h2>
        <h3>Display a list of elements that are stored inside a component</h3>
        <li v-for="post in posts">
            <p class="headlineRegular">{{ post.title }}</p>
            <p>{{ post.description }}</p>
            <p>{{ post.content }}</p>
            <br>
        </li>

        <br>
        <hr>
        <h2>Iteration 5 | Bonus </h2>
        <h3>Change the background color of an element when pressing a button</h3>
        <div class="styleMe" v-bind:style='{"background-color" : (isActive ? "chartreuse" : "indigo" )}'>
            <button @click="changeColor()">Click me!</button>

  
  
        </div>


    </div>

</template>
        
<style scoped>
div {
    width: 50%;
    margin: 20px auto 20px auto;

}


.headlineRegular {
    font-size: 16px;
    font-weight: 400;
    color: indigo;
}

li {
    list-style: none;
}

h3,
hr {
    margin-bottom: 20px;
}

.styleMe {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 60px;
}
</style>