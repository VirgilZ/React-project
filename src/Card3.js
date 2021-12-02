import React from "react";
import './Card.css';
import img from '../box.jpg';

function Carddd () {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={img} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3> Boxes L de 6 à 10 m² </h3>
                </div>
                <div className="card-body">
                    <p> 140€ HT / mois</p>
                </div>
            </div>
        </div>
    )
}

export default Carddd