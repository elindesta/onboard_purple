import React from "react";
import Engineering from "../img/engineering.jpg";

function Courses(props) {
    return <div className="courses">
    <section className="container">
        <div className="card">
        <div className="textbox">
            <h1>Samhällsbyggnad</h1>
            <p>Är du intresserad av att förändra samhället genom miljö, energi, samhällsbyggnad och fastigheter? Se våra utbildningar inom samhällsbyggnad här!
</p>
        </div>
        <img className="engineering" src={Engineering}></img>
        </div>
    </section>
    </div>
}

export default Courses;