import React from "react";
import Engineering from "../img/engineering.jpg";
import Ekonomi from "../img/ekonomi.jpg";
import IT from "../img/it.jpg";

function Courses(props) {
    return <div className="courses">
    <section className="container">
        <div className="card">
        <div className="textbox">
            <h1>Samhällsbyggnad</h1>
            <p>Är du intresserad av att förändra samhället genom miljö, energi, samhällsbyggnad och fastigheter? Se våra utbildningar inom samhällsbyggnad här!
</p>
        </div>
        <img className="engineering" alt="" src={Engineering}></img>
        </div>
    </section>

    <section className="container">
        <div className="card">
        
        <img className="it" alt="" src={IT}></img>
        <div className="textboxIT">
            <h1>IT</h1>
            <p>Är du intresserad av programmering, datorer och att arbeta i en växande och kreativ bransch? Titta på våra IT-utbildningar här!</p>
        </div>
        </div>
    </section>

    <section className="container">
        <div className="card">
        <div className="textbox">
            <h1>Ekonomi</h1>
            <p>Har du siffersinne, gillar ordning och reda och är intresserad av e-handel? Här hittar du utbildningar inom det området!
</p>
        </div>
        <img className="ekonomi" alt="" src={Ekonomi}></img>
        </div>
    </section>
    </div>
}

export default Courses;