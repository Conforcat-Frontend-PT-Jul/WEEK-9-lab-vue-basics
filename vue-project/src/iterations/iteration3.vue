<script>
    export default {
      data() {
        return {
          changeIt: true,
          bananaxD: true
        }
      },
      methods: {
        changechangeIt() { this.changeIt = !this.changeIt },
        changebananaxD() { this.bananaxD = !this.bananaxD }
      }
    }
    </script>
    
    <template>
        <div class="bananaStyle">
          <p v-if="changeIt">Hey 1: The variable changeIt is {{ changeIt }}</p>
          <p v-else>Hooray 2: The variable changeIt is {{ changeIt }}</p>
        </div>
        <button @click="changechangeIt()" class="bananaButton">Let's change!</button>
        <div class="bananaStyle">
          <p v-show="bananaxD">Hello 1: The variable changeIt is {{ bananaxD }}</p>
          <p v-show="!bananaxD">Hello 2: The variable changeIt is {{ bananaxD }}</p>
        </div>
        <button @click="changebananaxD()" class="bananaButton">Click to change!</button>
    </template>
    
    <style scoped>
    div {
      margin: 15px 0px;
    }
    .bananaStyle{
        display: flex;
        justify-content: center;
    }
    .bananaButton{
        display: inline-flex;
        justify-content: center;
    }
    </style>