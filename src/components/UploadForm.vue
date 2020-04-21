<template>
    <div class="upload-container">
        <div v-if="isLoggedIn" class="dropper">
            <input type="file" @change="uploadImages($event.target.files)"
            multiple
            accept="image/*" />
            <span> Drop your files here </span>
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
    name: 'UploadForm',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['uploadImages'])
}
</script>

<style scoped>

.upload-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.dropper {
    height: 30vh;
    border: 2px dashed;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 50px;
    width: 50%;
}

.dropper:hover {
    background-color: #7ec1d6c4;
}

input {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    position: absolute;
    opacity: 0;
}
</style>