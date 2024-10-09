import React from "react";
import './Circuit-canada.css';

const CircuitCanada: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-9">
                <p className="text-picture-card">CANADA</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULE 1 - CIRCUIT GILLES-VILLENEUVE</p>
                <p className="title-card">CANADA GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">07 - 09 Jun</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitCanada;