import axios from 'axios'

const API_URL = "https://682234a8b342dce8004d7db4.mockapi.io/api/v1/prova/pets";
const API_IMG = 'https://dog.ceo/api/breeds/image/random/50'
export const pegarDogs = async () => {
    try{
        const response = await axios.get(API_URL)

        const pets = response.data
        return pets

    }catch(error) {

        console.error(error)

    }

}

export const pegarImagens = async () =>{
    try{
        const response = await axios.get(API_IMG)
        const imagens = response.data
        return imagens
    }catch(err){
        console.error(err)
    }
}