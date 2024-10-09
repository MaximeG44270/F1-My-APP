import React from "react";
import './Circuit-arabie-saoudite.css';

const CircuitArabieSaoudite: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-2">
                <p className="text-picture-card">ARABIE SAOUDITE</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULA 1 - JEDDAH CORNICHE CIRCUIT</p>
                <p className="title-card">ARABIE SAOUDITE GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">07 - 09 Mar</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitArabieSaoudite;