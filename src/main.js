import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./App";
import store from "./store";
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: ImageList
        },
        {
            path: '/upload',
            component: UploadForm
        },
        {
            path: '/oauth/callback',
            component: AuthHandler
        }
    ],
    linkExactActiveClass: "active" //--active tab highlight is not working otherwise
})
new Vue({
    router,
    store,
    render: h=> h(App)
}).$mount("#app")