

import axios from 'axios';

function getHeaders() {
    return {
        headers: {
            Accept: 'application/json',
            Authorization: localStorage.getItem('token')
        }
    }
}
const baseUrl = "https://fundoonotes.incubation.bridgelabz.com/api/notes/"

export let createNotes = async (data) => {
    // console.log(data)
    let response = await axios.post(baseUrl + "addNotes", data,getHeaders())
    return response;
}

export let getNotes = async () => {
    // console.log(data)
    let response = await axios.get(baseUrl + "getNotesList",getHeaders())
    return response;
}
