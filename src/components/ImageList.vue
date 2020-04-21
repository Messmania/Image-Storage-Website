<template>
  <div class="image-list-area">
    <div v-if="isLoggedIn" class="image-container">
      <div v-for="img in allImages" :key="img.id">
        <img :src="img.link" />
      </div>
    </div>
    <div v-else>
      <div class="login-text">
        Please login to continue
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
  created() {
    if(this.isLoggedIn) {
        this.fetchImages();
    }
  }
};
</script>

<style scoped>
.image-list-area {
  margin-top: 50px;
}

.image-container {
  column-count: 4;
  column-gap: 2;
}

img {
  max-width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid teal;
  box-shadow: 5px 5px #00808047;
}
</style>