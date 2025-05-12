import React, { useEffect, useState } from "react";
import { pegarDogs, pegarImagens } from "../services/petService";

const Home = () => {
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [imagens, setImagens] = useState()


    useEffect(() => {
        const carregaPets = async () => {
            try{
                const imgs = await pegarImagens()
                const dados = await pegarDogs()
                console.log(imgs)
                setImagens(imgs.message)
                setPets(dados.slice(0, 3) || [])
                setLoading(false)
            }catch(err){
                setError("Erro ao carregar pets")
                setLoading(false)
                console.log(err)
            }
        }

        carregaPets()
    }, [])

    if(loading) return <div>Carregando...</div>
    if(error) return <div>(error)</div>

return (
    <div style={{justifyContent:'center', justifyItems:'center'}}>
        <h1>Bem vindo ao Dog legal</h1>

        <div style={{width:'300px', height:'200px'}}>

        <ul>
            {pets.map((e) => (
                <li ket={e.id}><p style={{fontSize:'40px'}}>{e.name}</p> <img style={{width:'300px', height:'200px'}} src={imagens.message}></img></li>
            ))} 
        </ul>

        </div>



    </div>

)
}

export default Home