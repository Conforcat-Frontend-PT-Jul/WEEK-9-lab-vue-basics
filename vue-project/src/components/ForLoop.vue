<template>
  <div>
    <h1>For Loop</h1>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }} <br />
      {{ post.description }} <br />
      {{ post.content }}
      <br />
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 0,
          title: "Dale a",
          description: "Give to",
          content: "hahaha",
        },
        {
          id: 1,
          title: "tu cuerpo",
          description: "your body",
          content: "hahaha",
        },
        {
          id: 2,
          title: "alegría, Macarena",
          description: "happiness, Macarena",
          content: "hahaha",
        },
      ],
    };
  },
};
</script>

<style>
li {
  list-style: none;
}
</style>
