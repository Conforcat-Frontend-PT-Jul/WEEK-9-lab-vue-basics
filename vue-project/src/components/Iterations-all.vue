<script setup>
import { ref, onMounted } from "vue";

const sum = ref();
const message = "The Result is: ";

const mssg = ref("the result is 4");

function changeText(text) {
  mssg.value = text;
}

const posts = [
  {
    id: 1,
    title: "Sed ut perspiciatis",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    img: "😀",
  },
  {
    id: 2,
    title: "Ab, laudantium",
    body: "Ab, laudantium. Dignissimos est ducimus neque aliquam iure obcaecati illum! Blanditiis ducimus perspiciatis aspernatur consequatur nulla maiores saepe provident odio. Ratione, est.",
    img: "😎",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "🤪",
  },
  {
    id: 4,
    title: "At vero eos et accusamus",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    img: "🥳",
  },
];

let isVisible = true;
let isActive = ref(true);

onMounted(() => {
  console.log(message + sum.value);
});

function changeColor() {
  isActive.value = !isActive.value;
}
</script>
<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <div>{{ post.img }}</div>
    </li>
  </ul>
  <div class="wrap">
    <button @click="changeText('Vue did it!')">click</button>
    {{ mssg }}
    <p v-show="isVisible" ref="sum" :class="{ isHidden: isActive }">
      {{ message }} {{ 2 + 2 }}
    </p>

    <span
      v-show="isVisible"
      @click="changeColor"
      type="button"
      :class="{ circle: isActive }"
    >
      click me
    </span>
  </div>
  <img
    v-show="isVisible"
    src="./../assets/logo.svg"
    alt="logo"
    width="125"
    height="125"
    :class="{ isHidden: isActive }"
  />
</template>

<style scoped>
li {
  list-style: none;
}

ul {
  text-align: center;
}
.wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0px 4rem 0px 0rem;
}

img {
  position: absolute;
  bottom: 5px;
  left: 47%;
  z-index: 99;
}

.isHidden {
  display: none;
}

span {
  display: flex;
  background-color: rgba(15, 112, 15, 0.719);
  padding: 1rem;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  text-align: center;
  color: white;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}

p {
  margin: 0px 15px 0px 5px;
}
.circle {
  background-color: whitesmoke;
  color: black;
  border: 1px solid black;
  cursor: pointer;
}
button {
  padding: 0.5rem;
  background-color: green;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  display: block;
  cursor: pointer;
}
</style>
