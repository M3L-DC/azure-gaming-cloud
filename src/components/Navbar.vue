<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand style="margin-left: 24px">
        <router-link class="item-decoration" to="/Home"
          >Azure Gaming Cloud</router-link
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="item-decoration" to="/Catalogue"
              >Catalogue</router-link
            >
          </b-nav-item>
          <b-nav-item>
            <router-link class="item-decoration" to="/">Sign Out</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss">
.right {
  justify-content: right;
}
.item-decoration {
  text-decoration: none;
  color: rgb(233, 231, 231);
}
</style>