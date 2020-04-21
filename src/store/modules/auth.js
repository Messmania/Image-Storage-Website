import api from "../../api/imgur";
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => {console.log("Is logged in called:", state.token, !!state.token); return !!state.token}
}

const actions= {
    logout: ({commit})=>{
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
        console.log("Local storage:", window.localStorage.getItem('imgur_token'));
    },
    login: ()=> api.login(),
    finalizeLogin: ({commit}, hash) => {
        console.log("Finalize login")
        //--extract token from url
        const q = qs.parse(hash.replace("#", ''));
        commit('setToken', q.access_token);
        window.localStorage.setItem('imgur_token', q.access_token);

        //--redirect user to app root url
        router.push('/');
    }
}

const mutations = {
    setToken: (state, tokenValue) => {
        state.token = tokenValue;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}