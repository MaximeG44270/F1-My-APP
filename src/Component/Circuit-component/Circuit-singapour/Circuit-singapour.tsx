import React from "react";
import './Circuit-singapour.css';

const CircuitSingapour: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-18">
                <p className="text-picture-card">SINGAPOUR</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULE 1 - CIRCUIT URBAIN DE MARINA BAY</p>
                <p className="title-card">SINGAPOUR GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">20 - 22 Sep</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitSingapour;