import React from "react";
import './Ferrari.css';

const TeamFerrari: React.FC = () => {

    return (
        <div className="body-card-team">
            <div className="name-logo">
                <div className="color-name">
                    <div className="color-team-ferrari"></div>
                    <div className="name-team">FERRARI</div>
                </div>
                <div className="logo-team">
                    <img className="picture-logo-team" src="/images/Team/Ferrari/Logo/ferrari-logo.png" alt="logo-ferrari" />
                </div>
            </div>
            <div className="border-inter-ligne"></div>
            <div className="team-pilote">
                <div className="pilote-1">
                    <div className="name-pilote">
                        <div className="first-name">Charles</div>
                        <div className="last-name">LECLERC</div>
                    </div>
                    <img className="picture-pilote-1-charles" src="/images/Team/Ferrari/image-pilote/chalec01.png" alt="pilote-1-ferrari" />
                </div>
                <div className="border-inter-ligne-pilote-1"></div>
                <div className="pilote-2-carlos">
                    <div className="name-pilote">
                        <div className="first-name">Carlos</div>
                        <div className="last-name">SAINZ</div>
                    </div>
                    <img className="picture-pilote-2-carlos" src="/images/Team/Ferrari/image-pilote/carsai01.png" alt="pilote-2-ferrari" />
                </div>
                <div className="border-inter-ligne-pilote-2"></div>
            </div>
            <div className="monoplace">
                <img className="picture-monoplace" src="/images/Team/Ferrari/monoplace/ferrari.png" alt="monoplace-ferrari" />
            </div>
            <div className="border-line-component-ferrari"></div>
        </div>
    );
}

export default TeamFerrari;