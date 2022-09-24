<template>
  <div id="iteration4" class="section">
    <h1 class="green">Iteration 4</h1>

    <div class="posts">
      <PostCard
        :post="post"
        v-for="post in posts"
        :key="post.id"
        @click="navigateToFullPost(post.id)"
      />
    </div>
  </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";

export default {
  name: "TheIteration4",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Post 1",
          description: "This is the first post",
          content: "This is the content of the first post and it is very long",
          image: "https://picsum.photos/200/300?random=1",
          alt: "This is the alt of the first post",
        },
        {
          id: 2,
          title: "Post 2",
          description: "This is the second post",
          content: "This is the content of the second post and it is very long",
          image: "https://picsum.photos/200/300?random=2",
          alt: "This is the alt of the second post",
        },
        {
          id: 3,
          title: "Post 3",
          description: "This is the third post",
          content: "This is the content of the third post and it is very long",
          image: "https://picsum.photos/200/300?random=3",
          alt: "This is the alt of the third post",
        },
      ],
    };
  },
  components: {
    PostCard,
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.post__post__image {
  position: relative;
  height: 30rem;
  object-fit: cover;
}
.post__post__title {
  font-size: 2rem;
}
.post__post__description {
  margin: 1rem;
  font-style: italic;
}
.post__post__body {
  margin-bottom: 5rem;
}
</style>
