import React from 'react';
import { useState, useEffect } from 'react';
import './filterprogram.css';

import program from '../data/programData';
import { data } from 'jquery';



const ItProgram = program.filter(program => program.type === 'IT');

const SamProgram = program.filter(program => program.type === 'Samhällsbyggnad');

const AllPrograms = program.filter(program => program.type);

const EconomyProgram = program.filter(program => program.type === 'Ekonomi');


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
                {AllPrograms.map(data => {
                    return(<div id="card">
                        <h2>{data.name}</h2>
                        <p>{data.location.join(", ")}</p>
                        </div>
                    )
                })}
            </div>)}>Alla</button>
            <button className="btn" onClick={() => setCourse(<div id="list">
                {EconomyProgram.map(data => {
                    return(<div id="card">
                        <h2>{data.name}</h2>
                        <p>{data.location.join(", ")}</p>
                        </div>
                    )
                })}
            </div>)}>Ekonomi</button>
            <button className="btn" onClick={() => setCourse(<div id="list">
                 {ItProgram.map(data => {
                    return(
                    <div id="card">
                    <h2>{data.name}</h2>
                    <p>{data.location.join(", ")}</p>
                    </div>
                    )
                })}
            </div>)}>IT</button>

            <button className="btn" onClick={() => setCourse(<div id="list">
                 {SamProgram.map(data => {
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