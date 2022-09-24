<script setup>
const articles = [
  {
    id: 1,
    title: "Title1",
    description: "I have very interesting news...",
    text: "newsnewsnewsnewsnews....etc",
  },
  {
    id: 2,
    title: "Title2",
    description: "Find here some more news...",
    text: "morenewsmoresnewsmoresnews....etc",
  },
  {
    id: 3,
    title: "Title3",
    description: "News never end...",
    text: "withnewsgoingeverywhere....etc",
  },
];
</script>

<template>
  <ul>
    <li v-for="article in articles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <h3>{{ article.description }}</h3>
      <p>{{ article.text }}</p>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style></style>
