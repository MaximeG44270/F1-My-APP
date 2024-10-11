import React from "react";
import './Haas.css';

const TeamHaas: React.FC = () => {

    return (
        <div className="body-card-team">
            <div className="name-logo">
                <div className="color-name">
                    <div className="color-team-haas"></div>
                    <div className="name-team">HAAS</div>
                </div>
                <div className="logo-team">
                    <img className="picture-logo-team" src="/images/Team/Haas/Logo/haas-logo.png" alt="logo-haas" />
                </div>
            </div>
            <div className="border-inter-ligne"></div>
            <div className="team-pilote">
                <div className="pilote-1">
                    <div className="name-pilote">
                        <div className="first-name">Nico</div>
                        <div className="last-name">HULKENBERG</div>
                    </div>
                    <img className="picture-pilote-1-nico" src="/images/Team/Haas/image-pilote/nichul01.png" alt="pilote-1-haas" />
                </div>
                <div className="border-inter-ligne-pilote-1"></div>
                <div className="pilote-2-kevin">
                    <div className="name-pilote">
                        <div className="first-name">Kevin</div>
                        <div className="last-name">MAGNUSSEN</div>
                    </div>
                    <img className="picture-pilote-2-kevin" src="/images/Team/Haas/image-pilote/kevmag01.png" alt="pilote-2-haas" />
                </div>
                <div className="border-inter-ligne-pilote-2"></div>
            </div>
            <div className="monoplace">
                <img className="picture-monoplace" src="/images/Team/Haas/monoplace/haas.png" alt="monoplace-haas" />
            </div>
            <div className="border-line-component-haas"></div>
        </div>
    );
}

export default TeamHaas;