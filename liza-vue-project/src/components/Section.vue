<script>

  export default {

    data() {
    return {
    string: "",
    hidden: true,
    color: true,
    posts: [
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
    getClass() {
      if (this.color) {
        this.color = false;
      } else {
        this.color = true;
      }
    }
  },

    mounted() {
      this.string = 'hello, I am a string returned by a function';
    }
  }
  
</script>

<template>
  <div>
    <p>{{ 2 + 2 }}</p>
    <p>{{ string }}</p>
    <p class="hide" v-show = "hidden">Hidden Element</p>
    <div class= "posts" v-for = "post in posts">
    <p>{{ post.title}}</p>  
    <p>{{ post.description}}</p>
    <p>{{ post.content}}</p>  
    </div>
    <div class="last-div" :class = "color? 'red' : 'blue'" @click="getClass"></div>
  </div>
</template>


<style scoped>
  .hide {
    text-decoration: line-through;
  }
  .posts {
    font-weight:700;
    border:1px solid black;
    padding:20px;
    margin:10px;
  }

  .red {
    background-color:red;
  }

  .blue {
    background-color:blue;
  }

  .last-div {
    height:100px;
  }

</style>