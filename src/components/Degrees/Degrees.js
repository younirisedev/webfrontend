// Degrees.js
import React, { useState } from "react";
import { degreesData } from "./degreesData";
import "./Degrees.css";

const DegreeCard = ({ degree }) => {
        return ( <
            div className = { `degree-card ${degree.highlight ? "highlight" : ""}` } >
            <
            h3 className = "degree-name" > { degree.name } < /h3> {
                degree.stream && < p className = "degree-stream" > { degree.stream } < /p>} <
                    p className = "degree-info" >
                    <
                    strong > Approving Body: < /strong> {degree.body} <br / >
                    <
                    strong > Duration: < /strong> {degree.duration} <
                    /p> <
                    button className = "degree-btn" > Learn More < /button> <
                    /div>
            );
        };

        const DegreeLevel = ({ levelData }) => {
            const [open, setOpen] = useState(false);

            return ( <
                div className = "degree-level" >
                <
                div className = "level-header"
                onClick = {
                    () => setOpen(!open) } >
                <
                h2 className = "level-title" > { levelData.level } < /h2> <
                span className = "toggle-icon" > { open ? "▲" : "▼" } < /span> <
                /div>

                {
                    open && ( <
                        div className = "degree-cards-container" > {
                            levelData.degrees.map((degree, index) => ( <
                                DegreeCard key = { index }
                                degree = { degree }
                                />
                            ))
                        } <
                        /div>
                    )
                } <
                /div>
            );
        };

        const Degrees = () => {
            return ( <
                div className = "degrees-section" >
                <
                h1 className = "section-title" > Degrees & Diplomas in India < /h1> {
                    degreesData.map((levelData, index) => ( <
                        DegreeLevel key = { index }
                        levelData = { levelData }
                        />
                    ))
                } <
                /div>
            );
        };

        export default Degrees;