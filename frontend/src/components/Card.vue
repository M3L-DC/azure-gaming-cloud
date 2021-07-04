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
      <button
        class="btn-play"
        variant="dark"
        @click="Play"
        v-if="active && !isLaunched"
      >
        Play
      </button>
      <button
        class="mt-2 btn-play"
        variant="dark"
        @click="Stop"
        v-if="active && isLaunched"
      >
        Stop VM
      </button>
    </b-card>
    <div v-if="error" class="mt-5 alert alert-danger">{{ error }}</div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Card",
  props: ["title", "active", "imgUrl"],

  data() {
    return {
      isLaunched: false,
      isLoading: false,
      error: "",
    };
  },

  methods: {
    Play() {
      alert("Demarrage de la VM");
      this. error = "",
      this.isLoading = true;
      // POST request using axios to start the vm
      Axios.post("http://localhost:3000/api/games/start_vm")
        .then((response) => {
          console.log(response);

          if (response.data.vmIsRunning) {
            console.log("Démarrage de la VM");
            setTimeout(() => {
              this.isLoading = false;
              this.isLaunched = true;
              alert(
                "Lancez le jeu sur un bureau disant en utilisant les données suivante :" +
                  "\n   Identifiant : user_" +
                  "\n   Mot de passe : Password_001" +
                  "\n   Ip : 20.199.120.167:3389"
              );
            }, 30000);
          }
        })
        .catch((error) => {
          console.log("error vm");
          console.log(error);
          this.isLoading = false;
          this.error = error;
        });
    },
    async Stop() {
      alert("Arret de la VM");
      this. error = "",
      this.isLoading = true;
      // POST request using axios to start the vm
      Axios.post("http://localhost:3000/api/games/stop_vm")
        .then((response) => {
          console.log(response);

          if (response.data.vmIsStopped) {
            console.log("Arret de la VM");
            setTimeout(() => {
              this.isLaunched = false;
              this.isLoading = false;
              alert("VM Arreté");
            }, 81000);
          }
        })
        .catch((error) => {
          console.log("error vm");
          console.log(error);
          this.isLoading = false;
          this.error = error;
        });
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