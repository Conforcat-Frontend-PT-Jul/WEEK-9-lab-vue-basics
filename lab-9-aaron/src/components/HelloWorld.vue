<template>
  <div class="hello" :style="bgStyles">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>For data</h3>
    <ul>
      <li v-for="data in templateData" :key="data.title">
        <h4 :title="data.description">{{data.title}}</h4>
        <p>{{data.content}}</p>
      </li>
    </ul>
    <h3>Calculate: {{2+2}}</h3>
    <button @click="showText">{{ showMethodText? "hide text" : "show text" }}</button>
    <button @click="changeColor">Change bg color</button>
    <h3 v-if="showMethodText">{{ computedText() }}</h3>
    
  </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      showMethodText: true,
      templateData: [
        {
          title: 'Title1',
          description: 'Description1',
          content: 'Content1'
        },
        {
          title: 'Title2',
          description: 'Description2',
          content: 'Content2'
        },
        {
          title: 'Title3',
          description: 'Description3',
          content: 'Content3'
        },
      ],
      bgColor: '#fff',
    }
  },  
  methods: {
    computedText() {
      return "This is a text from a method";
    },
    showText() {
      this.showMethodText = !this.showMethodText;
      
    },
    changeColor() {
      this.bgColor === '#fff' ? this.bgColor = 'rgb(247, 247, 173)' : this.bgColor = '#fff';
    }
  },
  computed: {
    bgStyles() {
      return { "background-color": this.bgColor }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  position: absolute;
  width: 100vw;
  top: 100px;
  height: calc(100vh - 100px - 100px);
}
</style>
