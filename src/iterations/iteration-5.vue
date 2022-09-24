<template>
  <h1 class="green">Iteration 5</h1>
  <p>Change background color with a button</p>
  <div id="iteration5" class="section" :style="{ backgroundColor: color }">
    <button @click="color = getRandomColor()">Change color!🌈</button>
  </div>
</template>

<script>
import { ref } from "vue";
let color = ref("black");
const getRandomColor = () => {
  const hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default {
  name: "TheIteration5",
  setup() {
    return {
      color,
      getRandomColor,
    };
  },
};
</script>

<style scoped>
button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
button:hover {
  background-color: #3e8e41;
}
</style>
