<script>
import dalai from "../assets/dalai.jpeg";
import osho from "../assets/osho.jpeg";
import pilares from "../assets/pilares.jpeg";

export default {
  data() {
    return {
      isColored: false,
      books: [
        {
          image: dalai,
          title: "Las cuatro verdades",
          author: "The Dalai Lama",
          description:
            "Un magistral compendio de las raíces del budismo y de la realización personal que este posibilita.",
          content:
            "Esta recopilación de enseñanzas acerca de las Cuatro Nobles Verdades, fundamento de la filosofía budista y de su correcta práctica en la vida cotidiana.",
        },
        {
          image: osho,
          title: "Miedo",
          author: "Osho",
          description: "Entender y aceptar las inseguridades de la vida",
          content:
            "Un libro que nos enseña a aceptar y afrontar nuestros miedos La vida es inseguridad. Cada nueva situación nos lleva a una inseguridad más profunda que la anterior. Es un juego en el que nadie sabe cuál será el siguiente paso.",
        },
        {
          image: pilares,
          title: "Los pilares de la tierra",
          author: "Ken Follet",
          description:
            "La obra maestra de Ken Follett en una lujosa edición especial 30 aniversario con más de un centenar de ilustraciones.",
          content:
            "El amor y la muerte se entrecruzan vibrantemente en este magistral tapiz cuyo centro es la construcción de una catedral gótica. La historia se inicia con el ahorcamiento público de un inocente y finaliza con la humillación de un rey.",
        },
      ],
    };
  },
  methods: {
    sum: (a, b) => a + b,
    toColor() {
      this.isColored = !this.isColored;
    },
  },
};
</script>

<template>
  <div class="bg">
    <div class="book-wrapper">
      <!-- <div class="book-card colored" v-for="book in books" :key="book.title"> -->
      <div
        class="book-card"
        :class="{ colored: isColored }"
        v-for="book in books"
        :key="book.title"
      >
        <div class="img">
          <img :src="book.image" alt="Image of book" />
        </div>
        <h2 :class="{ colored: isColored }">{{ book.title }}</h2>
        <h3 :class="{ colored: isColored }">{{ book.author }}</h3>
        <h4 :class="{ colored: isColored }">{{ book.description }}</h4>
        <p :class="{ colored: isColored }">{{ book.content }}</p>
      </div>
    </div>
    <button class="button-change" @click="toColor()">Change Card Color</button>
  </div>
</template>

<style scoped>
div .colored {
  background-color: grey;
  color: white;
}
.bg {
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
}

img {
  margin-bottom: 1rem;
  width: 150px;
}

.book-wrapper {
  padding: 5% 5% 0 5%;
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.book-card {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: stretch;
  background-color: white;
  padding: 2rem 1.3rem;
  box-shadow: 0px 0px 130px -21px rgba(148, 146, 148, 0.3);
}

h2 {
  font-size: 1.6rem;
  color: rgb(171, 195, 195);
  font-weight: bold;
}
h3 {
  font-size: 1.3rem;
  color: lightslategray;
  font-weight: bold;
}

h4 {
  font-size: 1.1rem;
  font-weight: bold;
  color: grey;
}

p {
  color: lightslategray;
}

span {
  font-weight: bold;
}

button {
  border: none;
  background-color: darkslategrey;
  color: white;
  padding: 20px 30px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50px;
  margin: 1rem;
}

button:hover {
  cursor: pointer;
  background-color: darkcyan;
}
.isVisible {
  display: none;
}
</style>
