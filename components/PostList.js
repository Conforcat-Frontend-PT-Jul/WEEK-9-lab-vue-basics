app.component('post-list', {
    data(){
        return{
            items:[ 
                {title: 'La insoportable levedad del Ser', description: 'Novel', author: 'Millan Kundera'},
                {title: 'Cien años de Soledad', description: 'Novel', author: 'Gabriel Garcia Marquez'},
                {title: 'Las cenizas de Angela', description: 'Novel', author: 'Frank McCourt'},
                {title: 'El libro de los abrazos', description: 'Short Stories', author: 'Eduardo Galeano'}
            ]
              
        }
    },
    template:
    /*html*/
   `
   <div class="post-lists">
   <h1>Y aqui, una lista de buenos libros que van bien con el Otoño:</h1>
   <div class="posts" v-for="item of items">
   {{ item.title }} - {{ item.description }} - {{ item.author }}
   </div>
   </div>
    `
  });