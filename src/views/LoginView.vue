<template>
  <div class="mt-5" style="max-width: 30rem; margin: auto">
    <b-container class="login-container">
      <h1 style="color: rgb(233, 231, 231)">Connexion</h1>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          class="label-form mt-3"
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            class="border-form mt-2"
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="label-form mt-3"
          id="input-group-2"
          label="Password:"
          label-for="input-2"
        >
          <b-form-input
            class="border-form mt-2"
            id="input-2"
            v-model="form.name"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button class="btn-connexion" type="submit">Se connecter</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      this.$router.push({ path: "/" });
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss">
.login-container {
  max-width: 720px !important;
  margin-top: 100px ;
}
.label-form {
  text-align: left;
  color: rgb(233, 231, 231) !important;
}
.border-form {
  border-bottom: solid !important;
  border-left: none !important;
  border-top: none !important;
  border-right: none !important;
}
.btn-connexion {
  border-radius: 40px !important;
  background-color: #ff0000 !important;
  margin-top: 50px !important;
}
</style>