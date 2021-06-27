<template>
  <div class="game-card mr-3 ml-3">
    <b-card no-body class="overflow-hidden" style="max-width: 20rem">
      <b-card
        overlay
        :title="title"
        :img-src="imgUrl"
        img-alt="Image"
        img-top
        class="mb-2"
      ></b-card>
      <b-button href="#" variant="dark">Play</b-button>
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
</style>