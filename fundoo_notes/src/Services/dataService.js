

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
    console.log(data)
    let response = await axios.post(baseUrl + "addNotes", data,getHeaders())
    return response;
}

export let getNotes = async () => {
    console.log()
    let response = await axios.get(baseUrl + "getNotesList",getHeaders())
    return response;
}

export let archieveData = async (data) => {
    console.log(data)
    let archivedData = {
        noteIdList: data.noteIdList,
        isArchived: data.isArchived
    }
    let response = await axios.post(baseUrl + `archiveNotes`,archivedData ,getHeaders())
    return response;
}
export let archieveList = async () => {
    // console.log()
    let response = await axios.post(baseUrl + "ArchiveNotesList",getHeaders())
    return response;
}

export let deleteForever = async () => {
    // console.log()
    let response = await axios.post(baseUrl + "deleteForeverNotes",getHeaders())
    return response;
}

export let trashNotes = async (data) => {
    console.log(data)
    let trashedData = {
        noteIdList: data.noteIdList,
        isDeleted: data.isDeleted
    }
    let response = await axios.post(baseUrl + "trashNotes", trashedData,getHeaders())
    return response;
}

export let updateColor = async (data) => {
    console.log(data);
    let colorData = {
        noteIdList: data.noteIdList,
        color:data.color
    }
    console.log(colorData);
    debugger
    let response = await axios.post(baseUrl + 'changesColorNotes',colorData,getHeaders())
    return response;
}