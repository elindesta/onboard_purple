import React from "react";
import "../App.css";
import Engineering from "../img/engineering.jpg";
import Ekonomi from "../img/ekonomi.jpg";
import IT from "../img/it.jpg";
import homePlaceholder from "../img/placeholder_home.png";


function Home(props) {
    return <div className="homePage">
        
            <section className="section1">

           <div className="homeContainer">
               <div className="textBox">
               <h1>Gör dig oumbärlig</h1>
                   <p>Genom en utbildning på KYH tar du examen med relevanta kunskaper och en gedigen arbetslivserfarenhet,
                    och kommer ut på en arbetsmarknad med stor efterfrågan på just din kompetens.</p>
               </div>

               <div className="textBox">
                   <h1>Experter inom våra områden</h1>
                   <p>På KYH har vi valt att fokusera på och spetsa kompetensen inom de tre områden vi kan bäst: samhällsbyggnad,
                        IT och ekonomi. Detta för att kunna erbjuda de bästa utbildningarna tillgängliga på marknaden.</p>
               </div>

               <div className="textBox">
                   <h1>Inspirerad och motiverad</h1>
                   <p>Vi gör vårt yttersta för att skapa en dynamisk studietid för dig som är student och vill etablera ett harmoniskt tankesätt kring balansen mellan privatliv och skola. 
                       Läs mer om vårt karriär-och nätverksprogram.</p>
               </div>

           </div>
            </section>

            <section className="section2">
                <div>
                    <h1>Antagningen 2021</h1>
                    <p>Vi öppnar antagningen för höstens starter i februari - april. Välkommen med din ansökan då!</p>
                </div>

                <img className="homePlaceholder" alt="" src={homePlaceholder}></img>
            </section>

            <section className="section3">
            <div className="container">
        <div className="card">
        <div className="textbox">
            <h1>Samhällsbyggnad</h1>
            <p>Är du intresserad av att förändra samhället genom miljö, energi, samhällsbyggnad och fastigheter? Se våra utbildningar inom samhällsbyggnad här!
</p>        
            <button className="buttonEngineering">Våra utbildningar</button>
        </div>
        <img className="engineering" alt="" src={Engineering}></img>
        </div>
    </div>

    <div className="container">
        <div className="card">
        
        <img className="it" alt="" src={IT}></img>
        <div className="textboxIT">
            <h1>IT</h1>
            <p>Är du intresserad av programmering, datorer och att arbeta i en växande och kreativ bransch? Titta på våra IT-utbildningar här!</p>
            <button className="buttonIt">Våra utbildningar</button>
        </div>
        </div>
    </div>

    <div className="container">
        <div className="card">
        <div className="textbox">
            <h1>Ekonomi</h1>
            <p>Har du siffersinne, gillar ordning och reda och är intresserad av e-handel? Här hittar du utbildningar inom det området!
</p>        
            <button className="buttonEkonomi">Våra utbildningar</button>
        </div>
        <img className="ekonomi" alt="" src={Ekonomi}></img>
        </div>
    </div>
            </section>

    <footer>
        
    </footer>

        </div>
}

export default Home;