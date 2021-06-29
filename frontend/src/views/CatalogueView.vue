<template>
  <div class="pt-5">
    <h1 style="color: rgb(233, 231, 231)">Catalogue</h1>
    <div class="list-game">
      <div v-for="game in games" :key="game._id">
        <Card
          :title="game.title"
          :active="game.active"
          imgUrl="https://picsum.photos/600/300/?image=25"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Axios from "axios";

export default {
  components: {
    Card,
  },
  data() {
    return {
      games: null,
      loading: true,
      errored: false,
    };
  },
  created() {
    // Simple GET request using axios
    Axios.get("http://localhost:3000/api/games")
      .then((response) => (this.games = response.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
};
</script>

<style lang="scss">
.list-game {
  display: flex !important;
  margin: 50px;
  justify-content: center;
}
</style>