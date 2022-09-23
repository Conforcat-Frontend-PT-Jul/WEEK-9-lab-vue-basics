<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <Main></Main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>
header {
  display: flex;
	flex-flow: row wrap;
	align-content: center;
  justify-content: space-between;
	box-sizing: border-box;
	height: 60px;
	width: 100%;
	margin:auto;
  background-color:thistle;
}

footer{
	display: flex;
	align-items: center;
	flex-flow: row wrap-reverse; 
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	margin:  20px auto 20px auto;
  background-color:cadetblue;
  padding: 0 20px 0 20px;
}
</style>
