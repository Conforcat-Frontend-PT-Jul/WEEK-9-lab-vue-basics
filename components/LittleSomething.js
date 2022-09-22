app.component('little-something', {
    data(){
        return{
            number1: 2,
            number2: 2,
            result:0,
            backgroundColor:"#16a085",
            color: [
                "#16a085",
                "#27ae60",
                "#2c3e50",
                "#f39c12",
                "#e74c3c",
                "#9b59b6",
                "#FB6964",
                "#342224",
                "#472E32",
                "#BDBB99",
                "#77B1A9",
                "#73A857"
              ],
              gif: "../assets/img/ted.gif",
              hover: false,
           
            
              
        }
    },
    template:
    /*html*/
   `

   <main v-bind:style="{ backgroundColor: backgroundColor}">
   <div id="title">
   <h1>Ahora sumemos:</h1>
   <p>{{this.number1}}</p>
   <p>+</p>
   <p>{{this.number2}}</p>
   </div>
   <button 
   class="button"
   @click="makeTheSum">
   Sumalos!
  </button>

  Y el resultado es: <p class="result">{{this.result}}</p>
  
  <button 
   class="button"
   @click="changeBg">
   Clickame!
  </button>
  
 
  <div class="giphy-embed">
    <span
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      Ahora pasa el raton sobre <strong> este texto</strong> porfa.
      
    </span>
    <span v-if="hover">
    <img v-bind:src="gif"  ></span>
  </div>
 


 
    </main>
   
    `
    ,
    
    methods: {
        makeTheSum(){
            this.result+= this.number1 + this.number2;
             
        },
        changeBg(){
            this.backgroundColor = this.color [Math.floor(Math.random() * 10)];
        },
      
    },
    computed:{
        
    }

  });
