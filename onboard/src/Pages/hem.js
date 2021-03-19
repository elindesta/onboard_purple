import React, { useEffect, useContext, useState } from "react";
import "./hem.css";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";
import { logOut } from "../services/firebase";
import Navbar from "./Navbar";

import { act } from "react-dom/test-utils";

import FilterProgram from '../components/filterProgram';

const courses = []

export default function Hem() {
    
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);

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
            <Navbar />
            <div className="filterdCourses">
                    <FilterProgram />

                    
            </div>


        </div>
    );
}