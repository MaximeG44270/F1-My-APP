import React from "react";
import './OnBoard.css';
import { useNavigate } from 'react-router-dom';

const OnBoard: React.FC = () => {
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
            <h1>Bienvenue sur la page On Board</h1>
        </div>
    );
}

export default OnBoard;
