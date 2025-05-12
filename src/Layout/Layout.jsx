import React from "react";
import  Header  from "../componentes/Header";
import Footer from "../componentes/Footer";
import { Outlet }  from "react-router-dom";


export const Layout = () => {
    return(
        <div>
                <Header />
               
                <main>

                    <Outlet />

                </main>

                <Footer />

        </div>

    )
}

export default Layout