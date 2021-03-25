import React from "react";
import './contact.css';
import mail from "/Users/danilobuttafoco/Desktop/onboard_purple/onboard/src/img/mail.png"
import phone from "/Users/danilobuttafoco/Desktop/onboard_purple/onboard/src/img/phone.png"

function Contact(props) {
    return <div className="contact">

        <div className="contactPage">

            <section className="kontaktInfo">

                <div>
                <h1 className="kontaktaOss"> Kontakta oss</h1>
                <p className="medInfo">Du är välkommen att skicka in din fråga här <br></br> 
                eller kontakta oss via messenger på <br></br>Facebook!</p>
                </div>
                
                <div className="svarSection">

                    <form action="/action_page.php"> 

                <form className="namnEmailMes">
                    <label className="headingBox" for="fname">Namn</label><br></br>

                    <input className="inputBox" type="text" id="fname" name="fname"></input>
                </form>

                        <form className="namnEmailMes">
                        <label className="headingBox" for="email">Email</label><br></br>

                        <input className="inputBox" type="email" id="email" name="email"></input>
                </form>

                <form className="namnEmailMes">
                        <label className="headingBox" for="fname">Meddelande</label><br></br>

                        <textarea className="messageBox" rows="4" cols="50" name="comment" form="usrform">
                            </textarea>
                </form>

                <input className="skickaBtn" type="submit" value="SKICKA"></input>

                </form>

                </div>

            </section>

            <section className="orangeBorder">
            <div className="blackBorder">
                <div className="infoSection">
                <h1>Info</h1>

                <div className="mailSect">
                    <img className="mail" src={mail} alt="mail"></img>
                     <p>antagningen@kyh.se</p>
                    </div>

                <div className="teleSect">
                <img className="phone" src={phone} alt="phone"></img>
                <p>0768852120</p>
                </div>
                </div>
            </div>
            </section>

        </div>

        <p className="faqInfo">Titta gärna in på vårt <span className="faqColor">FAQ</span> för se frågor andra har ställt!</p>

    </div>
}

export default Contact;