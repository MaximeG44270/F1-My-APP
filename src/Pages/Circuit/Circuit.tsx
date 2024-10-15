import React from "react";
import './Circuit.css';
import CircuitBase from "../../Component/Circuit-component/circuit-base/circuit-base";
import { useNavigate } from 'react-router-dom';
const Circuit: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    };
    return (
        <div className="bg">
            <div className="nav">
                <ul className="nav-list">
                    <li onClick={() => handleNavigate('/circuit')}>Circuit</li>
                    <li onClick={() => handleNavigate('/team')}>Équipes</li>
                    <li onClick={() => handleNavigate('/pilote')}>Pilotes</li>
                    <li onClick={() => handleNavigate('/onboard')}>On Board</li>
                </ul>
            </div>
            <div className="circuit-component">
                    <CircuitBase />
            </div>
        </div>
    );
}

export default Circuit;