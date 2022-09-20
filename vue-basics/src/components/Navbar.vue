<script>
export default {    
    data() {
      return {
        visible: 'Yes I am visible'
      }
    }
  }
</script>

<template>
    <div class="greetings">
      <h3 v-show="visible">
        {{ visible }}
      </h3>
    </div>
</template>

