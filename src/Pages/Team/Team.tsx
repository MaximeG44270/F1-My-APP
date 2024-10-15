import React from "react";
import './Team.css';
import { useNavigate } from 'react-router-dom';
import TeamBase from "../../Component/Team/Team-base/Team-base";
const Team: React.FC = () => {
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
            <div className="team-component">
                <TeamBase />
            </div>
        </div>
    );
}

export default Team;