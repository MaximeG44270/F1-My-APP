import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pilote.css';
import PiloteBase from '../../Component/Pilote/Pilote-base/pilote-base';

const Pilote: React.FC = () => {
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
                <PiloteBase />
            </div>
        </div>
    );
};

export default Pilote;
