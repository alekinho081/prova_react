import React from "react";

const Header = () => {
    
    return (
        <section>
            <nav style={{height:'30px', backgroundColor:'aqua', display:'flex', justifyContent:'space-around'}}>
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
            </nav>
        </section>
    )
}

export default Header