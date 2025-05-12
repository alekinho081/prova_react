import React from "react";
import { useState} from "react";
import useAuth from "../hook/useAuth";
import { useNavigate} from "react-router-dom" 

/*
    "email": "Harmony.Walter@hotmail.com",
    "password": "919",
    "id": "1"


*/

const Login = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate();
    const {login} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(user, pass);
        if(success) {
            navigate('/dashboard')
        }else {
            alert('Usuário ou senha inválida');
        }
        
        
    };


    return (
        <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input 
                    type="text" 
                    placeholder="Usuário"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    
                    />
                <br/>
                <input
                    type="password"
                    placeholder="Senha"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                
                />
                <br/>
                <button type="submit">Entrar</button>


        </form>
    )

}

export default Login