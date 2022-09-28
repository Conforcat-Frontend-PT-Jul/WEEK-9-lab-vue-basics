  <!-- Iteration 1!  COMPLETADA.-->

<script>
export default {
  data() {
    return {
      string: "",
      hidden: true,
      color: true,
      items: [
        {
          title: 'Title 1',
          description: 'Description 1',
          content: 'Content 1',
        },
        {
          title: 'Title 2',
          description: 'Description 2',
          content: 'Content 2',
        },
        {
          title: 'Title 3',
          description: 'Description 3',
          content: 'Content 3',
        },
      ]
    }
  },

  methods: {
    changeColor() {
      if (this.color) {
        this.color = false;
      } else {
        this.color = true;
      }
    }
  },
  mounted() {
    this.string = 'String returned by a function :) ';
  }
}

</script>
  
<template>

  <!-- Iteration 2! -->
  <div>
    <p>{{ 2 + 2 }}</p>
    <p>{{ string }}</p>

    <!-- Iteration 3! Show an element only if a particular property is set to true -->

    <div v-show="hidden">
      <p>Using v-show to show or hide text!</p>
    </div>
    <button @click="hidden = !hidden">Click me!</button>

    <!-- Iteration 4!  -->

    <div class="items" v-for="item in items">
      <p>{{ item.title}}</p>
      <p>{{ item.description}}</p>
      <p>{{ item.content}}</p>
    </div>

    <!-- Iteration 5!  -->

    <div class="last-ite" :class="color? 'blue' : 'blueLight'" @click="changeColor"> Click me! </div>
  </div>
</template>
  
  
<style scoped>
.items {
  font-weight: 700;
  border: 1px solid white;
  padding: 20px;
  margin: 10px;
}

button {
  border: none;
  background-color: rgb(15, 14, 47);
  color: rgb(0, 162, 255);
  padding: 20px 30px;
  font-size: 16px;
  border-radius: 50px;
}

button:hover {
  cursor: pointer;
  background-color: white;
}

.blue {
  background-color: rgb(15, 14, 47);
}

.blueLight {
  background-color: rgb(0, 162, 255);
}

.last-ite {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px 30px;
  font-size: 20px;
}
</style>