<template>
  <div class="catalogue">
    <h1>Catalogue</h1>
    <div class="list-game">
      <Card title="GAME 1" imgUrl="https://picsum.photos/600/300/?image=25" />
      <Card title="GAME 2" imgUrl="https://picsum.photos/600/300/?image=25" />
      <Card title="GAME 3" imgUrl="https://picsum.photos/600/300/?image=25" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss">
.list-game {
  display: flex !important;
  margin: 50px 50px;
}
</style>