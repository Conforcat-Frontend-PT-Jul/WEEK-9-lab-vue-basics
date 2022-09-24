<script>
import { defineComponent } from "vue";
import { nextTick, ref } from "vue";
import ConfettiExplosion from "vue-confetti-explosion";

const visible = ref(false);

const explode = async () => {
  visible.value = false;
  await nextTick();
  visible.value = true;
};

export default defineComponent({
  name: "TheIteration3",
  data() {
    return {
      msg: "Iteration 3",
      ok: true,
      likes: 0,
      visible,
    };
  },
  components: {
    ConfettiExplosion,
  },
  watch: {
    likes: function (val) {
      if (val >= 100) {
        explode();
      }
    },
  },
});
</script>

<template>
  <div id="iteration3" class="section">
    <h1 v-show="ok" class="green">{{ msg }}</h1>

    <div>
      <ConfettiExplosion v-if="visible" />
    </div>

    <p>
      Click on the heart <span class="click" @click="likes++">❤️</span>
      <span> {{ likes }}</span>
    </p>

    <span class="text" v-if="likes >= 5 && likes < 15"
      >✌🏼 Nice! You have clicked more than 5 times</span
    >
    <span class="text" v-else-if="likes >= 15 && likes < 100"
      >😎 Yeah! You have clicked more than 15 times</span
    >
    <span class="text finally" v-else-if="likes >= 100"
      >🤯 OMG! I didn't think you would but... you've clicked over 100 times!
      <br />You can stop now.</span
    >
    <span v-else>Keep clicking!</span>

    <br />
  </div>
</template>

<style scoped>
.click {
  user-select: none;
  cursor: pointer;
}
.text {
  font-size: 1.5rem;
  font-weight: bold;
}
.finally {
  color: red;
  font-size: 1.8rem;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
