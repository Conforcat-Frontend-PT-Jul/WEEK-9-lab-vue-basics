<script>
export default {
    data() {
        return {
            yes: true,
        };
    },
};
</script>
<template>
    <div id="myBody">
        <h3> Te gusta el color Azul ?</h3>
        <button class="si" @click="yes = !yes">a veces...</button>
        <div>
            <label v-if="yes"> ...me gusta
            </label>
            <label v-else>...no me gusta
            </label>
        </div>
    </div>

</template>
<style scoped>
#myBody {
    text-align: center;
    color: aliceblue;
    background-color: rgb(36, 135, 181);
    width: 100%;
    height: 150px;
}

h1 {
    font-size: 50px;
    color: rgb(255, 255, 255);
}

button {
    padding: 20px;
    border-radius: 50px;    
    font-size: large;
    border: none;
}
</style>