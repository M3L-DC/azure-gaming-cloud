<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand style="margin-left: 24px; cursor: default">
        Azure Gaming Cloud
        <!-- <router-link class="item-decoration" to="/">Azure Gaming Cloud</router-link> -->
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="item-decoration" to="/catalogue"
              >Catalogue</router-link
            >
          </b-nav-item>
          <b-nav-item>
            <button class="btn-decoration" type="button" @click="logout">
              Sign Out
            </button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      alert("Deconnexion en cours");
    },
  },
};
</script>

<style lang="scss">
.right {
  justify-content: right;
}
.item-decoration {
  text-decoration: none;
  color: rgb(233, 231, 231);
}
.btn-decoration {
  border: none !important;
  background-color: inherit;
  color: inherit !important;
}
</style>