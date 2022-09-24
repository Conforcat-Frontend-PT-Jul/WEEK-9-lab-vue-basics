<template>
    <div>
        <img src="../assets/logo.svg" alt="logo">
        <ul>
            <li v-for="(item, index) in navList" :key="index">
                <a href="#">{{item}}</a>
            </li>

            <p>{{printString}}</p>
        </ul>
    </div>

</template>

<script>
import { computed } from '@vue/reactivity'

export default {
    setup(){
        const navList= ["Inicio", "Nosotros", "Contacto"]
        const word = "Hola!"
        const printString = computed(() => {
            return word     
        })


        return{
            navList,
            word,
            printString
        }

    }


}
</script>

<style>
    img{
        width: 80px;
    }
    li{
        display: inline;
    }
    ul{
        display: flex;
        gap: 10px;
    }
</style>