<script>
    export default {    
        data() {
          return {
            items: [
                {
                    title: 'Initial Title',
                    description: 'Initial Description', 
                    content: 'Content0'
                }
            ],
            bColor: "",
            colToggle: true
          }
        },

        mounted() {
            const arr = [
                {
                    title: 'Titolo1',
                    description: 'Description1', 
                    content: 'Content1' 
                },
                {
                    title: 'Titolo2',
                    description: 'Description2', 
                    content: 'Content2' 
                }
            ];


            for(let i=0; i<arr.length; i++) {
                this.items.push(arr[i]);
               
            }
        },

    methods: {
        changeColor() {
            this.colToggle = !this.colToggle;
            if(this.colToggle) {
            this.bColor = "coral"
            } else {
                this.bColor = "aqua"
            }
    }
  }
    }
</script>
    
    <template>
        <div>Bonus Iteration</div>
        <div :class = bColor >
          <h3 v-for = "item  in items" :key="items.title">
            {{ item.title }}
            {{ item.description }}
            {{ item. content }} 
          </h3>
          <button @click="changeColor"> Toggle Color</button>
        </div>
    </template>


<style scoped>
    
    h3 {
      font-size: 1.2rem;
    }
    
    .aqua {
      text-align: center;
      background-color: aquamarine;
      color: blue;
    }

    .coral {
      text-align: center;
      background-color: coral;
      color: blue;
    }
    

    </style>