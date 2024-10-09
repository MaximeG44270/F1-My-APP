import React from "react";
import './Circuit-bahrein.css';

const CircuitBahrein: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card">
                <p className="text-picture-card">Bahreïn</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULA 1 - BAHRAIN INTERNATIONAL CIRCUIT</p>
                <p className="title-card">BAHRAIN GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">29 Feb - 02 Mar</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitBahrein;