<template>
  <div class="wrapper">
    <h1>NAVBAR COMPONENT</h1>
    <!-- ITERATION 2 -->
    <label>First Name: </label>
    <input type="text" id="name" name="name" v-model="firstName">
    <br>
    <label>Last Name: </label>   
    <input type="text" id="name" name="name" v-model="lastName">
    <br>
    <label>Year of birth: </label>   
    <input type="number" id="year" name="year" v-model="year">

    <p>Hello! I'm {{myName}} and I'm {{myAge}} years old. I was born in {{year}}</p>

    <!-- ITERATION 3 -->
    <label for="favSerie">What's your fauvorite serie?</label>
    <br>
    <input type="text" id="fav-serie" name="fav-serie" v-model="favSerie">
    <p v-if="favSerie.length > 0">I'm a fan of {{favSerie}}</p>

    <!-- ESTO SE QUEDA A MEDIAS PORQUE NO ME HA ACABADO DE SALIR -->
    <!-- <fieldset>
      <legend>Which film you like the most?</legend>
      <div>
        <input @click="checkFilm" type="radio" id="harry" name="fav_film" value="harry-potter" :checked="checkedValue =='harry'">
        <label for="harry">Harry Potter</label>
      </div>
      <div>
        <input @click="checkFilm" type="radio" id="rings" name="fav_film" value="lord-of-the-rings" :checked="checkedValue =='rings'">
        <label for="rings">Lord of the Rings</label>
      </div>
      <div>
        <input @click="checkFilm" type="radio" id="wars" name="fav_film" value="star-wars" :checked="checkedValue =='wars'">
        <label for="wars">Star Wars</label>
      </div>
      <p v-show="harryMessage">Omg, you are a Potterhead!!!</p>
      <p v-show="ringsMessage">You shall not pass!!! </p>
      <p v-show="warsMessage">Srsly, am I your father?</p>
    </fieldset> -->
  </div>
</template>

<script>
import {ref, computed} from 'vue';

export default {
  setup(){

    // ITERATION 2
    let name = ref("")
    let firstName = ref("")
    let lastName = ref("")
    let age = ref(0)
    let year = ref(0)
    let actualYear = 2022

    const myAge = computed(() => {
      if(year.value){
        age.value = actualYear - year.value;
        return age;
      } else return null
      
      
    })

    const myName = computed(() => {
      name.value = firstName.value + " " + lastName.value;
      return name.value
    })


    // ITERATION 3

    let favSerie = ref("");

    // let harryMessage = ref(false);
    // let ringsMessage = ref(false);
    // let warsMessage = ref(false);
    // let checkedValue = "";
    // const checkFilm = () => {
        // switch(checkedValue){
          
        //   case "harry":
        //     harryMessage.value = true
        //     ringsMessage.value = false
        //     warsMessage.value = false
        //     break;

        //   case "rings":
        //     harryMessage.value = false
        //     ringsMessage.value = true
        //     warsMessage.value = false
        //     break;

        //   case "wars":
        //     harryMessage.value = false
        //     ringsMessage.value = false
        //     warsMessage.value = true
        //     break;

        // }
    // }    



    return{
      name,
      firstName,
      lastName,
      myName,
      age,
      year,
      actualYear,
      myAge,
      favSerie,
      // harryMessage,
      // ringsMessage,
      // warsMessage,
      // checkedValue,
      // checkFilm
    }
  }
}
</script>

<style>

</style>