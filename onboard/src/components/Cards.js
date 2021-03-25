import React from 'react';
import { useState } from 'react';
import data from '../data/programData';
import './cards.css'
import SelectProgram from './SelectProgram';


const Cards = () => {

const [state, setState] = useState(data);

   const handleClick = (e) => {
       
    let program = e.target.value;

    if(program === 'Alla'){
        setState(data)
    }else if(program === 'Ekonomi'){
        const filterCourse = data.filter(course => course.type === 'Ekonomi') 
        setState(filterCourse);
    }else if(program === 'IT'){
        const filterCourse = data.filter(course => course.type === 'IT') 
        setState(filterCourse);

    }else if(program === 'Samhällsbyggnad'){
        const filterCourse = data.filter(course => course.type === 'Samhällsbyggnad') 
        setState(filterCourse);

    }
   }



    return (<div>
        <div className="color-box">
            <div className="orange"></div>
            <div className="black"></div>
        </div>
        <h1 className="welcome-text">Hej! Vänligen välj utbildning...</h1>

        <div className="btnContainer">
        <button className="btn" id="alla" value="Alla" onClick={handleClick}>Alla</button>
        <button className="btn" id="ekonomi" value='Ekonomi' onClick={handleClick}>Ekonomi</button>
        <button className="btn" id="it" value='IT' onClick={handleClick}>IT</button>
        <button className="btn" id="sam" value='Samhällsbyggnad' onClick={handleClick}>Samhällsbyggnad</button>

        </div>
        <div className="list">
          
          {state.map((course) =>(<div className="card" key={course.id}>
            
            <h2>{course.name}</h2>
            <SelectProgram />
            <p>{course.location.join(", ")}</p>
            </div>
          ))}

        </div>
        
    </div>
    );
    
    
}
export default Cards;