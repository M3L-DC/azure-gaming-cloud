<template>
  <div class="game-card">
    <b-card no-body class="overflow-hidden body-game-card">
      <b-card
        overlay
        :title="title"
        :img-src="imgUrl"
        img-alt="Image"
        img-top
        class="mb-2"
      ></b-card>
      <button class="btn-play" href="#" variant="dark">Play</button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "imgUrl"],
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