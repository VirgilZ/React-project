import React from "react";
import './Card.css';
import img from '../box.jpg';

function Cardddd () {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={img} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>Boxes XL de 10 à 16 m²</h3>
                </div>
                <div className="card-body">
                    <p> 200€ HT / mois</p>
                </div>
            </div>
        </div>
    )
}

export default Cardddd