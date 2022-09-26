<template>
  <div>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }} <br>
      {{ post.description }} <br>
      {{ post.content }}
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
          title: 'Welcome',
          description: 'What is Lorem Ipsum?',
          content: 'lorem ipsum lorem ipsum lorem ipsum',
        },
        {
          id: 1,
          title: 'Projects',
          description: 'Why do we use it?',
          content: 'lorem ipsum lorem ipsum lorem ipsum',
        },
        {
          id: 2,
          title: 'Where does it come from?',
          description: 'This are our services',
          content: 'lorem ipsum lorem ipsum lorem ipsum',
        },
        {
          id: 3,
          title: 'Contact Us',
          description: 'Where can I get some?',
          content: 'lorem ipsum lorem ipsum lorem ipsum',
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