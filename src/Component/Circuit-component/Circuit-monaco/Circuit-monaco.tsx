import React from "react";
import './Circuit-monaco.css';

const CircuitMonaco: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-8">
                <p className="text-picture-card">MONACO</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULE 1 - CIRCUIT DE MONACO</p>
                <p className="title-card">MONACO GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">24 - 26 Mai</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitMonaco;