import axios from 'axios'

const API_URL = "https://682234a8b342dce8004d7db4.mockapi.io/api/v1/prova/usuarios";


export const loginRequest = async (email, password) => {
    try {
        const response = await axios.get(API_URL);
        
        const users = response.data

        const user = users.find ((user) => user.email === email && user.password === password)
        return user ? {success: true, user} : {success: false};


    }catch(error) {
        console.error("Erro de autenticação", error)
        return {success: false};
    }
}