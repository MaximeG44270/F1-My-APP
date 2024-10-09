import React from "react";
import './Circuit-italy.css';

const CircuitItaly: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-16">
                <p className="text-picture-card">ITALY</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULE 1 - CIRCUIT DE MONZA</p>
                <p className="title-card">ITALY GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">31 - 01 Aou</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitItaly;