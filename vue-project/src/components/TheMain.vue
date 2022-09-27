<script>
import { ref, computed } from "vue";

export default {
  name: "TheMain",
  setup() {
// ITERATION 2
    const number1 = 2;
    const number2 = 2;
    const sum = computed(() => {
      return parseInt(number1) + parseInt(number2);
    });
    return {
      sum,
    };
  },
};

// ITERATION 3

const cool = ref(false);

// ITERATION 4


const posts = ref[{
{ title: 'Monitor LG',
  description: 'Monitor 27"',
  content: 'LG 27UL500-W - Monitor 27 pulgadas, UHD, 60Hz, 5 ms, 1000:1, 300nit, sRGB 98%, 16:9, HDMI, DisplayPort, Color Blanco'

};
{
  title: 'Ratón NGS',
  description: 'Mouse USB',
  content: 'NGS Easy Gamma - Ratón Óptico Inalámbrico de 1200 dpi con Conexión USB, 2,4 GHz, Scroll + 2 Botones'
};
{
  title: 'Teclado Trust',
  description: 'Teclado USB',
  content: 'Trust Taro Pack Teclado y Ratón con Cable - Disposición QWERTY Español, Cable de 1.8m, Conexión USB, Teclado Resistente a los Vertidos, Windows, Mac, PC, Ordenador Portátil, Negro';
};
}];

</script>

<template>
  <div>
    <!-- ITERATION 2 -->
    <p>La suma es: {{ 2 + 2 }}</p>
    <p>La suma es: {{ sum }}</p>

    <!-- ITERATION 3 -->
    <button @click="cool = !cool">Toggle</button>
    <h1 v-if="cool">Vue is cool!</h1>
    <h1 v-else>Oh no 😢</h1>

     <!-- ITERATION 4 -->

     <p v-for="post in posts">
            <p>{{ post.title }}</p>
            <p>{{ post.description }}</p>
            <p>{{ post.content }}</p>
     </p>

  </div>
</template>

<style scoped></style>
