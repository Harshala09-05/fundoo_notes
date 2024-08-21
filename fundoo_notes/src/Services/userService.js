import axios from "axios"

const baseUrl = "https://fundoonotes.incubation.bridgelabz.com/api/user/"
export const signUp = async (data) => {
    // console.log(data);
    let response = await axios.post(baseUrl + "userSignUp", data);
    // console.log(response.data);
    return response;
}

// const baseUrl1 = "https://fundoonotes.incubation.bridgelabz.com/api/user/login"
export const signIn = async (data) => {
    // console.log(data);
    let response = await axios.post(baseUrl + "login", data)
    // console.log(response.data);
    return response;
}