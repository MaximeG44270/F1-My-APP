import React from "react";
import './Circuit-autriche.css';

const CircuitAutriche: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-11">
                <p className="text-picture-card">AUTRICHE</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULE 1 - LE RED BULL RACING</p>
                <p className="title-card">AUTRICHE GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">28 - 30 Jun</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitAutriche;