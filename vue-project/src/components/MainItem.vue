<script>
export default {
  data() {
    return {
      isVisible: false,
      suma: 2 + 2,
      message: "Component it's fully loaded",
      mounted: false,
    };
  },
  methods: {
    sum: (a, b) => a + b,
  },
  mounted() {
    this.mounted = true;
  },
};
</script>

<template>
  <div id="mainItem" class="mainItem">
    <span v-if="mounted">YES! I am mounted!</span>
    <p>This is simple data: {{ suma }}</p>
    <h3>
      2 + 2 = <span v-show="isVisible">{{ sum(2, 2) }}</span>
    </h3>
    <!-- <h3 v-show="isVisible">{{ sum(2, 2) }}</h3> -->
    <button v-on:click="isVisible = !isVisible">Show result</button>
  </div>
</template>

<style scoped>
.mainItem {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: white;
  color: lightslategray;
}

h3 {
  font-size: 4rem;
  color: rgb(171, 195, 195);
  font-weight: bold;
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
}

button:hover {
  cursor: pointer;
  background-color: darkcyan;
}
.isVisible {
  display: none;
}
</style>
