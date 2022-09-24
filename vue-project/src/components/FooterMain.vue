<template>
  <footer>
    <address>{{address}}</address>
    <p v-html="operation"></p>
  </footer>
</template>

<script>
export default {
    setup(){
      const address = "c/ Rector Alemany 7"
      const operation = 2+2


        return{
           address,
           operation
        }

    }
}
</script>

<style>

</style>