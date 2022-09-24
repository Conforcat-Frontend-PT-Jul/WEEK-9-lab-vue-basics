<script>
export default {
    data(){
        return{
            suma: 2 + 2,
            message: "",
            hidden: false,
            recipes:[
                {
                    name: 'Recipe 1',
                    ingredients: 'Ingredients 1',
                    time:'20 min',  
                },
                {
                    name: 'Recipe 2',
                    ingredients: 'Ingredients 2',
                    time:'30 min',  
                },
                {
                    name: 'Recipe 3',
                    ingredients: 'Ingredients 3',
                    time:'40 min',  
                },
            ]
        };
    },


    methods:{
      
    }, 

    mounted(){
    this.message = 'The result is:';
    },

}
</script>

<template>
<p> {{ suma }} </p>
<p> {{ message }}</p>
<p>2+2 = 
    <span v-show="hidden">{{suma}}</span>
</p>
<button @:click="hidden = true"> Show </button>

    <table>
       <thead>
            <tr>
                <th>Recipe</th>
                <th>Ingredients</th>
                <th>Time</th>
             </tr>   
        </thead>
        <tbody>
            <tr v-for="recipe in recipes">
                <td>{{ recipe.name }}</td>
                <td>{{ recipe.ingredients}}</td>
                <td>{{ recipe.time }}</td>
            </tr>
        </tbody>
    </table>

</template>

<style scoped>

p{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    color: blue;
    margin: 30px;
}

span {
  font-weight: bold;
  color: blueviolet;
  font-size: 15px;
}

button {
  border: none;
  background-color:blue;
  color: white;
  padding: 20px 30px;
  margin: 30px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 50px;
}
button:hover {
  cursor: pointer;
  background-color: blueviolet;
}

table{
    width: 100%;
    margin: 30px;
}

table thead tr th{
    font-weight: bold;
    background-color: blueviolet;
    color: antiquewhite;
}

td,th { 
    width: 25%;
    border-collapse: collapse;
    border: 1px solid blueviolet; 
    text-align: center;

}
   
</style>
