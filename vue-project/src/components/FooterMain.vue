<template>
  <div class="wrapper">
    <h1>FOOTER COMPONENT</h1>

    <ul>
      <li v-for="(post, num) in posts" :key="num">
        Post num {{num}}:
        <ul>
          <li v-for="(item, index) in post" :key="index">
            {{index}}:  {{item}}          
          </li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  setup(){

    
    const posts = [
      {
        title: "Best anime fights",
        description: "Sketchbook about the best 10 anime fights all times",
        content: "Fights like Naruto vs Pain, Gon vs Antgirl, Guts vs Griffith,  Ed vs Greed and much more!"
      },
      {
        title: "Web development for dummies",
        description: "Here you will learn about the basics of web development for rookies",
        content: "Check out how to manage your fisrst brushes with HTML5, CSS3 and JS without losing sleeping hours"
      },
      {
        title: "World of Warcraft secrets",
        description: "Know about all World of Warcraft secret events and items",
        content: "Do you want to know how to get the arcanite reaper yourself? Try this post!"
      }
    ]








    return{
      posts,
    }
  }
}
</script>

<style>
  h1{
    margin-top: 100px;
  }
</style>