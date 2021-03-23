import React from "react";
import laptop from  "./laptop.png";
import book from  "./book.png";
import hourglas from  "./hourglas.png";
import clasroom from "./classroom.png";
import gmail from "./gmail.png";
import googlemeet from "./googlemeet.png";
import messanger from "./messanger.png";





function Info(props) {
    return <div className="info">
        <section className="section2">
            <section className="wrapper">
            <div className="lonekonsult_section_align">
                
            <div className="lonekonsult_section">       
                </div>  
                <div className="lonekonsult_button_align">
                 <div className="lonekonsult_button">
                     <div className="centertext">
                     <h1 className="lonekonsult_text">
                         Lönekonsult
                     </h1>
                     </div>

                </div>   
             </div> 
             
         
            </div>
            <div className="paragraph_div">
            <p className="paragraph1">
                 Välkommen till protalen inför din skolstart som <p className="colored_paragraph">Lönekonsult,</p> här kan du hitta all nyttig information om din framtida utbildning!
             </p>
             </div>
             </section>
             <section className="teagreen_section">
             <div className="teagreen_div">
                 <h1 className="studier_header">
                     Vad behöver du inför dina studier?
                 </h1>
             <div className="align_icons">
             <div className="icondiv">    
             <img className="laptopicon" src={laptop} alt=""/>
             <h2 className="icon_text">Dator</h2>
             </div>
             <div className="icondiv"> 
             <img className="bookicon" src={book} alt=""/>
             <h2 className="icon_text_specialle">Kurslitteratur</h2>
             </div>
             <div className="icondiv"> 
             <img className="hourglasicon" src={hourglas} alt=""/>
             <h2 className="icon_text">Behov</h2>
             </div>
             </div>
             <div className="align_paragraph">
             <div className="icon_para_div">
             <p className="iconparagraph">
             Du behöver en bärbar dator för dina studier. Surfplatta eller mobiltelefon räcker inte utan du behöver en riktig dator som du kan installera Windowsbaserad programvara på. Vi rekommenderar en högst 2–3 år gammal dator med 8 GB internminne och operativsystemet Windows 10. Större delen av programvaran du använder i utbildningen är kostnadsfri för studenter. Du kan inte använda en chromebook på den här utbildningen.
             </p>
             </div>
             <div className="icon_para_div">
             <p className="iconparagraph">
             Under utbildningen behöver du bekosta din egen kurslitteratur och onlinematerial. Uppskattningsvis är det cirka 2000 kr per termin.
             Du kommer också behöva personligt material som pennor, anteckningsblock, miniräknare och liknande.
             </p>
             </div>
             <div className="icon_para_div">
             <p className="iconparagraph">
             Vi hjälper dig så klart om du har särskilda behov som behöver stöd. Förbered din dokumentation och intyg inför utbildningsstart så att du får rätt hjälp så snabbt som möjligt.
             </p>
             </div>
             </div>
             </div>
             </section>
             
             <div className="CSN">
             <h1 className="CSN_header">Information om CSN</h1>
             <p className="CSN_paragraph">Som studerande på KYH är du berikad studiemedel på 100%. Så fort skolan registrerat dig som studerande kan du enkelt söka bidrag via CSNs portal!</p>
              <div className="align_CSN_button">
              <div className="CSN_button">
                  <div className="center_csn">
                  <h1 className="CSN_button_text">
                      Till CSN
                  </h1>
                  </div>

              </div>   
             </div>
             </div>
             <div className="teagreen2">
                 <h1 className="utbildning_header"> Vad innehåller min utbildning?</h1>
                 <div className="year">
                 <h2 className="year_header"> Årskurs 1</h2>
                 <h2 className="year_header"> Årskurs 2</h2>
                 </div>
                 <div className="yearlist">
                <div>
                 <ul className="thelist">
                     <li>+ Medarbetarkunskap och branschkunskap <span className="yhp">10 yhp</span></li>
                     <li>+ Excel för lönekonsulter <span className="yhp">10 yhp</span></li>
                     <li>+ Arbetsrätt <span className="yhp">30 yhp</span></li>
                     <li>+ Lönehantering fördjupning <span className="yhp">40 yhp</span></li>
                     <li>+ Affärsengelska med yrkesinriktning <span className="yhp">15 yhp</span></li>
                 </ul>
                 </div>
                 <div className="thelist2_div">
                 <ul className="thelist2">
                     <li>+ Lönehantering <span className="yhp">40 yhp</span></li>
                     <li>+ Redovisning 20 <span className="yhp">yhp</span></li>
                     <li>+ Personalekonomi <span className="yhp">20 yhp</span></li>
                     <li>+ Konsultrollen <span className="yhp">20 yhp</span> </li>
                 </ul>
                 </div>
                 </div>

             </div>
             <div className="sidor">
                 <h1 className="sidor_header">Vilka sidor/tjänster behöver jag?</h1>
                 <div className="align_icons" id="sidor_icons">
                 <div className="icondiv">
                 <img className="classroom" src={clasroom} alt=""/>
                 </div>
                 <div className="icondiv">
                 <img className="gmail" src={gmail} alt=""/>
                 </div>
                 <div className="icondiv">
                 <img className="googlemeet" src={googlemeet} alt=""/>
                 </div>
                 </div>
                 <div id="align_sidor_paragraph_div">
                 <div className="sidor_paragraph_div">
                 <h2 className="sidor_paragraph">Via E-mailadressen skolan har givit dig så kan du enkelt skapa konton på dessa tjänster som du kommer att behöver under hela din utbildning för att kunna lämna in uppgifter, hålla kontakt med lärare och klasskamrater via mail och videosamtal!</h2>
                 </div>
                 </div>
             </div>
             <div className="teagreen3">
                 <h1 className="information_header">Information om skolan</h1>
                 <div className="information_paragraph_div">
                 <p className="information_paragraph">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </div>

             </div>
             
        </section>
<footer>
<div className="footericondiv">
<img className="messanger" src={messanger} alt=""/>
</div>
</footer>
    </div>
}

export default Info;