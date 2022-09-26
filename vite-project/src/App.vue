<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ConditionComponent from './components/ConditionComponent.vue'
import BlogComponent from './components/BlogComponent.vue'
/*export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    HelloWorld
  },
}*/
</script>

<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <HelloWorld></HelloWorld>
    <BlogComponent></BlogComponent>
    <ConditionComponent></ConditionComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped>
/*.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}*/
</style>
