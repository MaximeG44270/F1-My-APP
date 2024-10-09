import React from "react";
import './Circuit-belgium.css';

const CircuitBelgium: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-14">
                <p className="text-picture-card">BELGIUM</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULE 1 - CIRCUIT DE SPA-FRANCORCHAMPS</p>
                <p className="title-card">BELGIQUE GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">26 - 28 Jul</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitBelgium;