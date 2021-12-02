import React from "react";
import './Card.css';
import img from '../box.jpg';

function Card () {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={img} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>Boxes S de 2 à 3 m² </h3>
                </div>
                <div className="card-body">
                    <p> 50€ HT / mois</p>
                </div>
            </div>
            
          
        </div>
    )
}

export default Card