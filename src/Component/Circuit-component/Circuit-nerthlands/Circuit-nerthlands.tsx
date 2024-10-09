import React from "react";
import './Circuit-nerthlands.css';

const CircuitNerthlands: React.FC = () => {

    return (
        <div className="body-card">
            <div className="picture-card-15">
                <p className="text-picture-card">PAYS-BAS</p>
                <p className="text-2-picture-card">2025</p>
            </div>
            <div className="text-card">
                <p className="title-card">FORMULE 1 - CIRCUIT DE ZANDVOORT</p>
                <p className="title-card">PAYS-BAS GRAND PRIX 2025</p>
            </div>
            <div className="footer-component">
                <p className="date-card">23 - 25 Aou</p>
                <p className="picto-card">&gt;</p>
            </div>
            <div className="border-footer"></div>
        </div>
    );
}

export default CircuitNerthlands;