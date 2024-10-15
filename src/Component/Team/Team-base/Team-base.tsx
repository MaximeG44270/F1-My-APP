import React, { useEffect, useState } from "react";
import './Team-base.css';
import TeamBasePilote from "../Team-base-pilote/Team-base-pilote";

interface Driver {
    firstName: string;
    lastName: string;
    image: string;
}

interface Team {
    name: string;
    teamColor: string;
    logo: string;
    drivers: Driver[];
    monoplace: string;
}

const TeamBase: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        fetch('/json/team.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setTeams(data.teams))
            .catch((error) => console.error('Error fetching the teams:', error));
    }, []);

    return (
        <div className="teams-container">
            {teams.map((team, teamIndex) => (
                <div key={teamIndex} className="body-card-team">
                    {/* -------------------------- Ici pour gérer la partie team --------------------------- */}
                    <div className="name-logo">
                        <div className="color-name">
                            <div className="color-team" style={{ backgroundColor: team.teamColor }}></div>
                            <div className="name-team">{team.name}</div>
                        </div>
                        <div className="logo-team">
                            <img 
                                className="picture-logo-team" 
                                src={team.logo} 
                                alt={`logo-${team.name.toLowerCase().replace(' ', '-')}`} 
                            />
                        </div>
                    </div>
                    <div className="border-inter-ligne"></div>
                    {/* -------------------------- Ici pour gérer la partie Pilote --------------------------- */}
                    <TeamBasePilote team={team} />
                    <div className="border-inter-ligne"></div>
                    {/* -------------------------- Ici pour gérer la partie Monoplace --------------------------- */}
                    <div className="monoplace">
                        <img 
                            className="picture-monoplace" 
                            src={team.monoplace} 
                            alt={`monoplace-${team.name.toLowerCase().replace(' ', '-')}`}/>
                    </div>
                    <div className="border-line-component" style={{ borderColor: team.teamColor }}></div>
                </div>
            ))}
        </div>
    );
};

export default TeamBase;