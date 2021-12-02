import React from "react";
import './Card.css';
import img from '../box.jpg';

function Cardd () {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={img} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3> Boxes M de 3 à 6 m² </h3>
                </div>
                <div className="card-body">
                    <p>80€ HT / mois</p>
                </div>
            </div>
        </div>
    )
}

export default Cardd