import React from "react";
import './Circuit-australie.css';

const CircuitAustralie: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-3">
                <p className="text-picture-card">AUSTRALIE</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULA 1 - CIRCUIT ALBERT PARK</p>
                <p className="title-card">AUSTRALIE GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">22 - 24 Mar</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitAustralie;