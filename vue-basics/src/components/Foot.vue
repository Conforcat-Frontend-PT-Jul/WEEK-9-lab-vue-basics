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
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
  </style>