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
            ]
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
        }
    }
</script>
    
    <template>
        <div class="greetings">
          <h3 v-for = "item  in items" :key="items.title">
            {{ item.title }}
            {{ item.description }}
            {{ item. content }} 
          </h3>
        </div>
    </template>