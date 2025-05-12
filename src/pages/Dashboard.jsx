import React, { useEffect, useState } from "react";
import { pegarDogs} from "../services/petService";

const Dashboard = () => {
    const user = localStorage.getItem('nome')
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=> {
        const carregaPets = async () =>{
            try{
                const dados = await pegarDogs() 
                setPets(dados || [])
                setLoading(false)
            }catch(err){
                setError("Erro ao carregar pets")
                setLoading(false)
                console.log(err)
            }
        }
        carregaPets()
    },[])

    if(loading) return <div>Carregando...</div>
    if(error) return <div>(error)</div>

    return(

        <section>
            <h1>Olá, {user}!</h1>
            
            <div>
                <ul style={{justifyItems:'left'}}>
                    {pets.map((pet) => (
                        <li  style={{padding:'5px', border:'solid 1px'}}>
                            Nome: {pet.name}
                            <br />
                            Raça: {pet.breed}
                            <br />
                            Idade: {pet.age}
                            <br />
                            Tutor: {pet.owner}
                        </li>
                        
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Dashboard