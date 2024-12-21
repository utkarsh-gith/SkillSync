import React from "react";
import Header from "./header/header";
import {Outlet} from "react-router-dom"

function Layout(){
return(
    <>
    <Header/>
    <Outlet />
    
    </>
)
}
export default Layout