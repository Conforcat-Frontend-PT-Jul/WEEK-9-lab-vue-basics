<script>
export default {    
    data() {
      return {
        visible: 'Navigation item 1'
    }
  }
}
</script>

<template>
    <div >
      <ul> 
        <li v-show="visible">{{ visible }}</li>
        <li>Nav item 2</li>
      </ul>
    </div>
</template>

<style>

ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
}

  li {
    list-style: none;
    font-size: large;
  }

</style>