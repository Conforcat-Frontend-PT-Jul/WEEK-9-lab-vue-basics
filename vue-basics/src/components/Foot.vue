<script>
export default {    
    data() {
      return {
        footer: ''
      }
    },

    mounted() {
        const sum = 2 + 4
        this.footer = `The result in my footer is ${sum}`
    }
}

</script>

<template>
      <h3>
         {{ footer }}
      </h3>
</template>

<style scoped>
  
  
  h3 {
    font-size: 1.2rem;
    color: blueviolet;
  }
  
 

  </style>