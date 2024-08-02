import { createHeader } from "../components/header.js";
import { createProfile } from "../components/profile.js";

document.querySelector('header').append(createHeader());

function reload(arr, place, component) {
    let box = document.querySelector(`.${place}`);
    let elem = component(arr);
    box.append(elem);
}

axios.get('http://localhost:3001/profile')
    .then(res => {
        console.log(res)
        reload(res.data, 'profile', createProfile);
    })
    .catch(error => console.error(error));