<script>
    export default {
      data() {
        return {
          posts: {
            post1: {
              title: 'The Lord of the Rings',
              description: 'This is a synopsis of The Lord of the Rings',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at accumsan nulla. Praesent ultrices bibendum mauris. Fusce maximus tempor consequat. Aliquam erat volutpat. Suspendisse ac neque feugiat, cursus metus quis, pellentesque est. Mauris porta nisi at lacinia vulputate. Ut urna urna, pulvinar nec sem in, faucibus auctor tellus. Donec ut pretium lacus. Proin nec condimentum risus, quis molestie mauris. Quisque dignissim tellus dictum ipsum consequat iaculis. Donec ac urna hendrerit, imperdiet massa a, tristique orci. Maecenas tempus velit sit amet finibus tempor. Maecenas pellentesque orci non dolor pharetra fringilla. Suspendisse justo dui, molestie vel convallis nec, lacinia at orci. In commodo id mauris convallis accumsan. Maecenas dolor magna, ullamcorper et eros et, mollis iaculis nisl.',
              isGreen: false
            },
            post2: {
              title: 'Harry Potter',
              description: 'This is a synopsis of Harry Potter',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at accumsan nulla. Praesent ultrices bibendum mauris. Fusce maximus tempor consequat. Aliquam erat volutpat. Suspendisse ac neque feugiat, cursus metus quis, pellentesque est. Mauris porta nisi at lacinia vulputate. Ut urna urna, pulvinar nec sem in, faucibus auctor tellus. Donec ut pretium lacus. Proin nec condimentum risus, quis molestie mauris. Quisque dignissim tellus dictum ipsum consequat iaculis. Donec ac urna hendrerit, imperdiet massa a, tristique orci. Maecenas tempus velit sit amet finibus tempor. Maecenas pellentesque orci non dolor pharetra fringilla. Suspendisse justo dui, molestie vel convallis nec, lacinia at orci. In commodo id mauris convallis accumsan. Maecenas dolor magna, ullamcorper et eros et, mollis iaculis nisl.',
              isGreen: false
            },
            post3: {
              title: 'Pulp Fiction',
              description: 'This is a synopsis of Pulp Fiction',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at accumsan nulla. Praesent ultrices bibendum mauris. Fusce maximus tempor consequat. Aliquam erat volutpat. Suspendisse ac neque feugiat, cursus metus quis, pellentesque est. Mauris porta nisi at lacinia vulputate. Ut urna urna, pulvinar nec sem in, faucibus auctor tellus. Donec ut pretium lacus. Proin nec condimentum risus, quis molestie mauris. Quisque dignissim tellus dictum ipsum consequat iaculis. Donec ac urna hendrerit, imperdiet massa a, tristique orci. Maecenas tempus velit sit amet finibus tempor. Maecenas pellentesque orci non dolor pharetra fringilla. Suspendisse justo dui, molestie vel convallis nec, lacinia at orci. In commodo id mauris convallis accumsan. Maecenas dolor magna, ullamcorper et eros et, mollis iaculis nisl.',
              isGreen: false
            },
            post4: {
              title: 'Matrix',
              description: 'This is a synopsis of Matrix',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at accumsan nulla. Praesent ultrices bibendum mauris. Fusce maximus tempor consequat. Aliquam erat volutpat. Suspendisse ac neque feugiat, cursus metus quis, pellentesque est. Mauris porta nisi at lacinia vulputate. Ut urna urna, pulvinar nec sem in, faucibus auctor tellus. Donec ut pretium lacus. Proin nec condimentum risus, quis molestie mauris. Quisque dignissim tellus dictum ipsum consequat iaculis. Donec ac urna hendrerit, imperdiet massa a, tristique orci. Maecenas tempus velit sit amet finibus tempor. Maecenas pellentesque orci non dolor pharetra fringilla. Suspendisse justo dui, molestie vel convallis nec, lacinia at orci. In commodo id mauris convallis accumsan. Maecenas dolor magna, ullamcorper et eros et, mollis iaculis nisl.',
              isGreen: false
            },
          },
        }
      },
      methods: {
        changeColorIntoGreen(id) { this.posts[id].isGreen = !this.posts[id].isGreen }
      }
    }
    </script>
    
    <template>
        <div :class="{'green': this.posts[index].isGreen}" v-for="(post, index) in posts" :key="post.title">
          <h3>{{ post.title }} <small>({{ index }})</small></h3>
          <p class="description">{{ post.description }}</p>
          <p>{{ post.content }}</p>
          <button @click="changeColorIntoGreen(index)">Magic!</button>
        </div>
    </template>
    
    <style scoped>
    div {
      margin: 10px 0;
      padding: 10px;
      background-color: #1e3cab;
    }
    .green {
      background-color: #0e870e;
    }
    .description {
      font-style: italic;
    }
    </style>