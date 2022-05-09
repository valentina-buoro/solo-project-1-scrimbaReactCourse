import React from "react";

export default function Info() {
    return (
        <div>
            <div className="info--container">
                <img src='personal picture.jpg' alt="valentina"></img>
                <h1>Valentina Buoro</h1>
                <h3>Frontend Developer</h3>
                <h4>valentinabuoro4@gmail.com</h4>
            </div>
            <div className="button">
                <button className="email">Email</button>
                <button className="linkedin">LinkedIn</button>
            </div>

        </div>
    )
}