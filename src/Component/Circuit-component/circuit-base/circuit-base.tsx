import React, { useEffect, useState } from "react";
import './circuit-base.css';

interface Circuit {
    name: string;
    year: number;
    fullName: string;
    location: string;
    date: string;
    picture: string;
}

const CircuitBase: React.FC = () => {
    const [circuits, setCircuits] = useState<Circuit[]>([]);

    useEffect(() => {
        fetch('/json/circuit.json')
            .then((response) => response.json())
            .then((data) => setCircuits(data.circuits))
            .catch((error) => console.error("Erreur lors du chargement des données JSON :", error));
    }, []);

    return (
        <div className="circuit-list">
            {circuits.map((circuit, index) => (
                <div className="body-card" key={index}>
                    <div className="picture-card-container">
                        <img className="picture-card" src={circuit.picture} alt={circuit.name} />
                        <p className="text-picture-card">{circuit.name}</p>
                        <p className="text-2-picture-card">{circuit.year}</p>
                    </div>
                    <div className="text-card">
                        <p className="title-card">{circuit.fullName}</p>
                        <p className="title-card">{circuit.location}</p>
                    </div>
                    <div className="footer-component">
                        <p className="date-card">{circuit.date}</p>
                        <p className="picto-card">&gt;</p>
                    </div>
                    <div className="border-footer"></div>
                </div>
            ))}
        </div>
    );
}

export default CircuitBase;
