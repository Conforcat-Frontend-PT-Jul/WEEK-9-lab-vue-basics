<script>
export default {
  data() {
    return {
      op1: 'Option1',
      op2: 'Option2',
      op3: 'Option3'
    }
  }
}
</script>
    
<template>

  <nav>
    <a href="#">{{ op1 }}</a>
    <a class="blueText" href="#">{{ op2 }}</a>
    <a href="#">{{ op3 }}</a>
  </nav>

</template>
    
<style scoped>
nav a {
   text-decoration: none;
   color: #1f1f1f;
   margin: 0.75rem 1.5rem;
   display: inline-block;
   font-size: 20px;
   font-weight: 400;

 }

 .blueText {
   color: blueviolet;
 }
</style>