<script>
    export default {
      data() {
        return {  
          mathsum: 2 + 2,
          /*message: "",*/
          elementtrueorfalse: false,
          notshowing: false,
          items: [
            {
            title: "title1",
            description: "description1",
            content: "content1",
            },
            {
            title: "title2",
            description: "description2",
            content: "content2",
            },
            {
            title: "title3",
            description: "description3",
            content: "content 3",
            },
            ]

        };
      },
      methods: {
        
        },
        /*otherfunction () {
            this.message = "Print a string returded by a function";
        },*/
        mounted () {
        this.elementtrueorfalse = true;
        },
    };
    </script>
    
    <template>
      <div id="iterations" class="iterations">
        <h1>Iteration #2 </h1>
        <h2>Math Op result (2+2): {{ mathsum }} </h2>
        <h2> {{message}} </h2>

        <h1>Iteration #3 </h1> <!--using v-if and v-for-->
        <span v-if="elementtrueorfalse">Show an element only if a particular property is set to true</span>
        <h3>2 + 2 = <span v-show="notshowing">{{ mathsum }}</span></h3>
               <button @:click="notshowing = !notshowing">sum them up</button>
      </div>
      
      <h1>Iteration #4 </h1>
      <div class= "items" v-for = "item in items">
        <p> {{item.title}} </p>  
        <p> {{item.description}} </p>
        <p> {{item.content}} </p>  
    </div>

    </template>
    
    <style scoped>
    .iterations {
      width: 100%;
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: white;
      color: blue;
    }
    h1, h2, h3 {
      font-size: 2rem;
      color: blue;
      font-weight: bold;
      text-align: center;
    }
    span {
      font-weight: bold;
    }
    button {
      border: none;
      background-color: blue;
      color: white;
      padding: 20px 30px;
      font-size: 1.5rem;
      font-weight: bold;
      border-radius: 50px;
    }
    button:hover {
      cursor: pointer;
      background-color: black;
    }
    .notshowing {
      display: none;
    }

    .items {
    font-weight:700;
    text-align: center;
    border:1px solid blue;
    padding:20px;
    margin:10px;
    color: blue;
  }
    </style>