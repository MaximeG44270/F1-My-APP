import React from "react";
import './Circuit-gb.css';

const CircuitGb: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-12">
                <p className="text-picture-card">GRANDE BRETAGNE</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULE 1 - CIRCUIT DE SILVERSTONE</p>
                <p className="title-card">GRANDE BRETAGNE GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">05 - 07 Jul</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitGb;