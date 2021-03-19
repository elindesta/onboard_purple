import React from "react";
import "../App.css";
import filterCourses from './filterCourse';

function Home(props) {
    return <div className="homePage">
        
            <section className="section1">
            <div className="videoContainer">
                <h1>Welcome video from KYH</h1>
                <div className="videoPlaceholder">
                    <h1>VIDEO</h1>
                </div>
            </div>
           
            <div className="textContainer">
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h2>
            </div>
            </section>

        </div>
}

export default Home;