import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '4cd0de3fc976df8';
const ROOT_URL = 'https://api.imgur.com'

export default {
    login(){
        const params = {
            client_id: CLIENT_ID, 
            response_type: 'token'
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(params)}`
    },
    fetchImages (token) {
        return axios.get(`${ROOT_URL}/3/account/messmania/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    uploadImages (images, token ) {
        const promises = Array.from(images).map(img => { //--Array.from converts an iterable to an array
            const form = new FormData();
            form.append('image', img);
            return axios.post(`${ROOT_URL}/3/image`, form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
        return Promise.all(promises);
    }
}