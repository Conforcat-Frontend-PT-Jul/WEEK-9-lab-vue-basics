<template>
  <div class="post" :id="props.post.id">
    <img class="post__image" :src="props.post.image" :alt="props.post.alt" />
    <h5 class="post__title">{{ props.post.title }}</h5>
    <div class="post__description">{{ props.post.description }}</div>
    <div class="post__body">
      {{ props.post.content?.slice(0, 100) + "..." }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["post"]);
</script>

<style scoped>
.post {
  padding: 1.5rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.post__image {
  width: 100%;
  width: 22rem;
  height: 20rem;
  object-fit: cover;
}

.post__title {
  margin: 0.25rem;
  font-size: 2rem;
}

.post__description {
  font-style: italic;
}
.post__body {
  max-width: 22rem;
}
</style>
