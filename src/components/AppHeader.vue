<template>
  <div class="header-container">
    <div class="ui secondary pointing menu">
      <router-link to="/" class="item app-title"> &#128065; Image Storage</router-link>
      <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">
          <router-link class="ui item" to="/"> Gallery</router-link>
          <router-link class="ui item" to="/upload"> Upload </router-link>
          <a class="ui item" @click="logout"> Logout </a>
        </div>
        <a v-else class="ui item" href="#" @click="login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    ...mapActions(["login", "logout"])
  }
};
</script>

<style scoped>

.horizontal {
  display:flex;
}

.ui.secondary.pointing.menu {
  height: 10vh;
}

.ui.secondary.pointing.menu .item {
  align-self: center;
}

.header-container {
  background-color: #7fc1d6;
}

.app-title {
  font-size: large;
  text-shadow: 0.5px 0.5px gray;
  border: none !important; /*--to remove highlight when active */
  font-weight: 400 !important; /*--to remove highlight when active */
}
</style>
