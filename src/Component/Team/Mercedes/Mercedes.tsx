import React from "react";
import './Mercedes.css';

const TeamMercedes: React.FC = () => {

    return (
        <div className="body-card-team">
            <div className="name-logo">
                <div className="color-name">
                    <div className="color-team-mercedes"></div>
                    <div className="name-team">MERCEDES</div>
                </div>
                <div className="logo-team">
                    <img className="picture-logo-team" src="/images/Team/Mercedes/Logo/mercedes-logo.png" alt="logo-mercedes" />
                </div>
            </div>
            <div className="border-inter-ligne"></div>
            <div className="team-pilote">
                <div className="pilote-1">
                    <div className="name-pilote">
                        <div className="first-name">Lewis</div>
                        <div className="last-name">HAMILTON</div>
                    </div>
                    <img className="picture-pilote-1-lewis" src="/images/Team/Mercedes/image-pilote/lewham01.png" alt="pilote-1-mercedes" />
                </div>
                <div className="border-inter-ligne-pilote-1"></div>
                <div className="pilote-2-george">
                    <div className="name-pilote">
                        <div className="first-name">George</div>
                        <div className="last-name">RUSSELL</div>
                    </div>
                    <img className="picture-pilote-2-george" src="/images/Team/Mercedes/image-pilote/georus01.png" alt="pilote-2-mercedes" />
                </div>
                <div className="border-inter-ligne-pilote-2"></div>
            </div>
            <div className="monoplace">
                <img className="picture-monoplace" src="/images/Team/Mercedes/monoplace/mercedes.png" alt="monoplace-mercedes" />
            </div>
            <div className="border-line-component-mercedes"></div>
        </div>
    );
}

export default TeamMercedes;