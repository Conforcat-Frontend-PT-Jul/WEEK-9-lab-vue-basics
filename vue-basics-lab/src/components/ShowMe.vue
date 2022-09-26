<script>
    export default {
      data() {
          return {
            ShowMe: true
          }
        }
    }
    </script>
    
    <template>
      <button @click="ShowMe = !ShowMe">Show Me</button>
    
        <h1 v-if="ShowMe">Im not working!</h1>
        <h1 v-else>hell yeahh!!</h1>
        
    </template> 
  <style scoped>
  </style>