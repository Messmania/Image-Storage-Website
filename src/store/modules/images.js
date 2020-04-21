import api from "../../api/imgur";
import { router } from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: (state) => state.images
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

const actions = {
    fetchImages: async ({rootState, commit}) => { //-- rootState has all the Vuex modules
        //--call imgur API to fetch all the images
        const  { token } = rootState.auth; 
        const response = await api.fetchImages(token);
        // console.log("Images:", response);
        commit('setImages', response.data.data);
    },
    async uploadImages({ rootState }, images) {
        //--call imgur API to upload image
        await api.uploadImages(images, rootState.auth.token);
        //--redirect user to image list view
        router.push('/');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}