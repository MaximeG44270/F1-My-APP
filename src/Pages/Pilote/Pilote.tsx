import React from "react";
import './Pilote.css';
import { useNavigate } from 'react-router-dom';
import PiloteAlbon from "../../Component/Pilote/Albon/Albon";
import PiloteAlanso from "../../Component/Pilote/Alanso/Alanso";
import PiloteBearman from "../../Component/Pilote/Bearman/Bearman";
import PiloteBottas from "../../Component/Pilote/Bottas/Bottas";
import PiloteColapinto from "../../Component/Pilote/Colapinto/Colapinto";
import PiloteGasly from "../../Component/Pilote/Gasly/Gasly";
import PiloteHamilton from "../../Component/Pilote/Hamilton/Hamilton";
import PiloteHulkenberg from "../../Component/Pilote/Hulkenberg/Hulkenberg";
import PiloteLeclerc from "../../Component/Pilote/Leclerc/Leclerc";
import PiloteMagnussen from "../../Component/Pilote/Magnussen/Magnussen";
import PiloteNorris from "../../Component/Pilote/Norris/Norris";
import PiloteOcon from "../../Component/Pilote/Ocon/Ocon";
import PilotePerez from "../../Component/Pilote/Perez/Perez";
import PilotePiastri from "../../Component/Pilote/Piastri/Piastri";
import PiloteRicciardo from "../../Component/Pilote/Ricciardo/Ricciardo";
import PiloteRussell from "../../Component/Pilote/Russell/Russell";
import PiloteSainz from "../../Component/Pilote/Sainz/Sainz";
import PiloteSargeant from "../../Component/Pilote/Sargeant/Sargeant";
import PiloteStroll from "../../Component/Pilote/Stroll/Stroll";
import PiloteTsunoda from "../../Component/Pilote/Tsunoda/Tsunoda";
import PiloteVerstappen from "../../Component/Pilote/Verstappen/Verstappen";
import PiloteZhou from "../../Component/Pilote/Zhou/Zhou";

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
                    <li onClick={() => handleNavigate('/pilotes')}>Pilotes</li>
                    <li onClick={() => handleNavigate('/onboard')}>On Board</li>
                </ul>
            </div>
            <h1>Bienvenue sur la page Pilote</h1>
            <PiloteAlbon />
            <PiloteAlanso />
            <PiloteBearman />
            <PiloteBottas />
            <PiloteColapinto />
            <PiloteGasly />
            <PiloteHamilton />
            <PiloteHulkenberg />
            <PiloteLeclerc />
            <PiloteMagnussen />
            <PiloteNorris />
            <PiloteOcon />
            <PilotePerez />
            <PilotePiastri />
            <PiloteRicciardo />
            <PiloteRussell />
            <PiloteSainz />
            <PiloteSargeant />
            <PiloteStroll />
            <PiloteTsunoda />
            <PiloteVerstappen />
            <PiloteZhou />
        </div>
    );
}

export default Pilote;
