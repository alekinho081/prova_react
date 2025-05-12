import React from "react";

const Header = () => {
    
    return (
        <section>
            <nav style={{padding:'2px',height:'30px', backgroundColor:'aqua', display:'flex', justifyContent:'space-around'}}>
                <a 
                href="/" 
                style={{textDecoration:'none', 
                backgroundColor:'aquamarine', 
                border:'solid 1px', 
                borderRadius:'10px',
                width:'50px'    
            }}
                >
                    Home
                </a>
                
                <a 
                href="/dashboard" 
                style={{textDecoration:'none', 
                backgroundColor:'aquamarine', 
                border:'solid 1px', 
                borderRadius:'10px',
                width:'100px'  }}
                >
                    Dashboard
                </a>
                
                <a 
                href="/login" 
                style={{textDecoration:'none', 
                backgroundColor:'aquamarine', 
                border:'solid 1px', 
                borderRadius:'10px',
                width:'200px'}}
                >
                    Entrar como funcionário
                </a>

            </nav>
        </section>
    )
}

export default Header