import React, { useEffect, useContext, useState } from "react";
/* import "./Dashboard.css"; */
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";

export default function Kontakt() {
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);

    useEffect(() => {
        if (!user) {
            setredirect("/");
        }
    }, [user]);
    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return <div className="kontakt">
        <Navbar />
        <section className="section2"></section>
        <p>Kontakt Page</p>
        <footer></footer>
    </div>

}
