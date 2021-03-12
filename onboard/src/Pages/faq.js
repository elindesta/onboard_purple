
import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
/* import './faq.css'; */
import { logOut } from "../services/firebase";

function Faq(props) {
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

    return <div className="faq">
        <Navbar />
        <section className="sectionFaq">
            <h1><center>FAQ</center></h1>
            <br />
            <p> Hur ansöker jag?Väg-adress till skolorna?</p>
            <p> Vad behöver jag för att komma in på utbildningen?</p>
            <p>Hur mycket CSN kommer jag få?</p>
            <p>Kan man studera på Distans?</p>
            <p>Hur mycket närvaro måste jag ha för att bli godkänd?</p>
        </section>


        <div className="square"></div> <div className="sqLine"><hr /></div>
        <div><h1>Hittade du det du sökte?</h1>
            <p>Om du inte hittade svaret på din fråga kan du kontakta oss via vår livechatt eller skicka ett mail!</p>
            <div></div>
        </div>

    </div>
}

export default Faq;