<template>
  <div>
    <AppHeader />
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style>

.ui.container {
  width: 100%;
  background-color: #7ec1d630;
  padding: 20px;
  min-height: 90vh;
}


.login-text {
  font-style: italic;
  text-align: center;
  font-size: large;
  margin-top: 20px
}
</style>