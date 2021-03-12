import React from "react";
import laptop from  "./laptop.png";
import book from  "./book.png";
import hourglas from  "./hourglas.png";




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
             </div>
             </section>
             
        </section>
<footer></footer>
    </div>
}

export default Info;