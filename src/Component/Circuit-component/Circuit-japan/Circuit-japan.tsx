import React from "react";
import './Circuit-japan.css';

const CircuitJapan: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-4">
                <p className="text-picture-card">JAPAN</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULA 1 - CIRCUIT DE SUZUKA</p>
                <p className="title-card">JAPAN GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">05 - 07 Avr</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitJapan;