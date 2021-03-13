import React, { useEffect, useContext, useState } from "react";
import "./hem.css";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";
import { logOut } from "../services/firebase";
import Navbar from "./Navbar";
export default function Hem() {
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

    return (
        <div className="dashboard">
            <Navbar />
            <h1 className="dashboard-text">Welcome Home</h1>

        </div>
    );
}
