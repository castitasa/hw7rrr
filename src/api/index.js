import axios from "axios"

const API = axios.create({baseURL: 'http://localhost:3000/'})

const getAllUsers = () => API.get('users/')
const addUser = (payload) => API.post('users/', payload)

export {getAllUsers, addUser}