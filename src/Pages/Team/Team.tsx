import React from "react";
import './Team.css';
import { useNavigate } from 'react-router-dom';
import TeamAlpine from '../../Component/Team/Alpine/Alpine';
import TeamAstonMartin from "../../Component/Team/Aston-Martin/Aston-Martin";
import TeamFerrari from "../../Component/Team/Ferrari/Ferrari";
import TeamHaas from "../../Component/Team/Haas/Haas";
import TeamKickSauber from "../../Component/Team/Kick-Sauber/Kick-Sauber";
import TeamMcLaren from "../../Component/Team/McLaren/McLaren";
import TeamMercedes from "../../Component/Team/Mercedes/Mercedes";
import TeamRb from "../../Component/Team/RB/Rb";
import TeamRedBullRacing from "../../Component/Team/Red-Bull-Racing/Red-Bull-Racing";
import TeamWilliams from "../../Component/Team/Williams/Williams";
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
                <TeamAlpine />
                <TeamAstonMartin />
                <TeamFerrari />
                <TeamHaas />
                <TeamKickSauber />
                <TeamMcLaren />
                <TeamMercedes />
                <TeamRb />
                <TeamRedBullRacing />
                <TeamWilliams />
            </div>
        </div>
    );
}

export default Team;