import React from "react";
import './Circuit-miami.css';

const CircuitMiami: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-6">
                <p className="text-picture-card">MIAMI</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">AUTODROME INTERNATIONAL DE MIAMI</p>
                <p className="title-card">MIAMI GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">03 - 05 Mai</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitMiami;