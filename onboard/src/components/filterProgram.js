import React from 'react';
import { useState, useEffect } from 'react';
import './filterprogram.css';

import program from '../data/programData';



const itProgram = program.filter(program => program.type === 'IT');

const samProgram = program.filter(program => program.type === 'Samhällsbyggnad');

const allPrograms = program.filter(program => program.type);

const economyProgram = program.filter(program => program.type === 'Ekonomi');


function FilterProgram(){


   const [course, setCourse] = useState(null)

   useEffect(() => {
       console.log('Working button')
   },[course])

    return(
        <div className="dashboard">
            <h1 className="dashboard-text">Hej! Vänligen välj utbildning...</h1>
            
            <div className="btnContainer">
            <button className="btn" onClick={() => setCourse(<div id="list">
                {allPrograms.map(data => {
                    return(<div id="card">
                        <h2>{data.name}</h2>
                        <p>{data.location.join(", ")}</p>
                        </div>
                    )
                })}
            </div>)}>Alla</button>
            <button className="btn" onClick={() => setCourse(<div id="list">
                {economyProgram.map(data => {
                    return(<div id="card">
                        <h2>{data.name}</h2>
                        <p>{data.location.join(", ")}</p>
                        </div>
                    )
                })}
            </div>)}>Ekonomi</button>
            <button className="btn" onClick={() => setCourse(<div id="list">
                 {itProgram.map(data => {
                    return(
                    <div id="card">
                    <h2>{data.name}</h2>
                    <p>{data.location.join(", ")}</p>
                    </div>
                    )
                })}
            </div>)}>IT</button>

            <button className="btn" onClick={() => setCourse(<div id="list">
                 {samProgram.map(data => {
                    return(<div id="card">
                    <h2>{data.name}</h2>
                    <p>{data.location.join(", ")}</p>
                    </div>
                    )
                })}
            </div>)}>Samhällsbyggnad</button>
            </div>
            <div>
                <div>{course}</div>
            </div>
        </div>
    )

}

export default FilterProgram;