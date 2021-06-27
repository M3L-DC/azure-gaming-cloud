<template>
  <div class="pt-5">
    <h1 style="color: rgb(233, 231, 231)">Catalogue</h1>
    <div class="list-game">
      <Card title="GAME 1" imgUrl="https://picsum.photos/600/300/?image=25" />
      <Card title="GAME 2" imgUrl="https://picsum.photos/600/300/?image=25" />
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
  margin: 50px;
  justify-content: center;
}
</style>