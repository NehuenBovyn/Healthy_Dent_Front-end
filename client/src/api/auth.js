import axios from 'axios'
axios.defaults.withCredentials = true

// const url = 'https://healthydent-production.up.railway.app';
const url = 'http://localhost:4000';


export async function onRegistration(registrationData) {
  return await axios.post(
    `${url}/register`,
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post(`${url}/login`, loginData)
}

export async function onLogout() {
  return await axios.get(`${url}/logout`)
}

export async function getProfessional(){
  return await axios.get(`${url}/search`)
}

export async function registerProfessional(registerData){
  return await axios.post(`${url}/register/professional`, registerData)
}


