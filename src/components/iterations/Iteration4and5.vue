<script>
export default {
  data() {
    return {
      posts: {
        post1: {
          title: 'Title post 1',
          description: 'Little description of post 1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at accumsan nulla. Praesent ultrices bibendum mauris. Fusce maximus tempor consequat. Aliquam erat volutpat. Suspendisse ac neque feugiat, cursus metus quis, pellentesque est. Mauris porta nisi at lacinia vulputate. Ut urna urna, pulvinar nec sem in, faucibus auctor tellus. Donec ut pretium lacus. Proin nec condimentum risus, quis molestie mauris. Quisque dignissim tellus dictum ipsum consequat iaculis. Donec ac urna hendrerit, imperdiet massa a, tristique orci. Maecenas tempus velit sit amet finibus tempor. Maecenas pellentesque orci non dolor pharetra fringilla. Suspendisse justo dui, molestie vel convallis nec, lacinia at orci. In commodo id mauris convallis accumsan. Maecenas dolor magna, ullamcorper et eros et, mollis iaculis nisl.'
        },
        post2: {
          title: 'Title post 2',
          description: 'Little description of post 1',
          content: 'Sed porttitor tortor enim, vel sagittis diam bibendum in. Sed tempor mattis ante, non auctor est feugiat et. Cras egestas malesuada magna ac rhoncus. Maecenas ultricies, velit sed semper ullamcorper, purus ligula interdum nisi, eget sagittis sem mi ut arcu. Mauris iaculis enim consequat, cursus dui ut, efficitur purus. Quisque consequat lectus quis eros convallis, non finibus enim commodo. Phasellus eleifend ligula in eros sagittis venenatis. Praesent urna est, rhoncus et lacus sed, bibendum pulvinar tellus. Fusce augue ipsum, convallis at purus eget, accumsan varius justo. Fusce interdum blandit eros. Pellentesque eleifend vel ipsum in consequat. Nunc quis porttitor dolor.'
        },
        post3: {
          title: 'Title post 3',
          description: 'Little description of post 1',
          content: 'In porttitor tortor eu sapien varius, blandit efficitur justo condimentum. In mattis neque in viverra iaculis. Etiam aliquet libero eu risus porta tincidunt. Mauris efficitur finibus elementum. Fusce interdum bibendum lorem. Duis semper, sem at dictum vehicula, metus turpis tristique enim, nec faucibus augue augue non nibh. Integer venenatis nisl tellus, non tempor mi facilisis et.'
        },
        post4: {
          title: 'Title post 4',
          description: 'Little description of post 1',
          content: 'Curabitur ut neque sodales, consequat odio at, semper neque. Mauris tristique lacus vel volutpat suscipit. Aliquam euismod finibus est nec aliquet. Nulla facilisi. Vestibulum dictum et dui nec lacinia. Sed maximus, elit eu fermentum vulputate, augue libero lobortis libero, sed mattis ipsum tellus in tortor. Nunc ut nulla lobortis, sagittis felis ut, semper leo. Donec malesuada mollis tortor ut pellentesque. In finibus blandit lorem lacinia venenatis. Praesent ut sapien sem. Donec augue nunc, sagittis quis ipsum et, congue pellentesque felis. Vivamus hendrerit faucibus risus in accumsan. Phasellus mauris dolor, interdum sed nisl quis, placerat rutrum urna. Duis ultrices augue eu lacinia porttitor.'
        },
      },
      isGreen: false
    }
  },
  methods: {
    changeColorToGreen() { this.isGreen = !this.isGreen }
  }
}
</script>

<template>
    <div :class="{'green': isGreen}" v-for="(post, index) in posts" :key="post.title">
      <h3>{{ post.title }} <small>({{ index }})</small></h3>
      <p class="description">{{ post.description }}</p>
      <p>{{ post.content }}</p>
    </div>
    <button @click="changeColorToGreen()">Change color</button>
</template>

<style scoped>
div {
  margin: 10px 0;
  padding: 10px;
  background-color: #212121;
}

.green {
  background-color: #001100;
}

.description {
  font-style: italic;
}
</style>
    