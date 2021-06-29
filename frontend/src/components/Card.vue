<template>
  <div class="game-card">
    <b-card no-body class="overflow-hidden body-game-card">
      <b-card
        overlay
        :title="title"
        :active="active"
        :img-src="imgUrl"
        img-alt="Image"
        img-top
        class="mb-3"
      />
      <button class="btn-play" variant="dark" @click="Play" v-if="active">
        Play
      </button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "active", "imgUrl"],
  methods: {
    Play() {
      alert("Demarage de la VM");
      alert(
        "Lancez le jeu sur un bureau disant en utilisant les données suivante :" +
          "\n   Identifiant : user_" +
          "\n   Mot de passe : Password_001" +
          "\n   Ip : 20.199.120.167:3389"
      );
    },
  },
};
</script>

<style lang="scss">
.game-card {
  flex-direction: row;
  margin-left: 25px;
  margin-right: 25px;
}
.body-game-card {
  max-width: 20rem !important;
  background: none !important;
  border: none !important;
}
.card-title {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 12px;
}
.btn-play {
  background-color: #ff0000 !important;
  color: rgb(233, 231, 231);
  border: none;
  border-radius: 20px;
}
</style>