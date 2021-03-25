import React, { useEffect, useContext, useState } from "react";
import "./hem.css";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";


import Cards from '../components/Cards';


const courses = []

export default function Hem() {
    
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);
    console.log("Hej från hem")
    // const [active, setActive] = useState(null);

    // const setEconomy = ()
    

    useEffect(() => {
        if (!user) {
            setredirect("/");
        }
    }, [user]);
    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return (

        
        <div className="dashboard">
            <div className="hem">

                <Cards />
            
            </div>


        </div>
    );
}