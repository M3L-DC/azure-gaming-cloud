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
        class="mb-2"
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
          "\n   Ip : 10.0.0.1:3389"
      );
    },
  },
};
</script>

<style lang="scss">
.game-card {
  flex-direction: row;
  margin-left: 15px;
  margin-right: 15px;
}
.body-game-card {
  max-width: 20rem !important;
  background: none !important;
  border: none !important;
}
.btn-play {
  background-color: #ff0000 !important;
  color: rgb(233, 231, 231);
  border: none;
  border-radius: 20px;
}
</style>