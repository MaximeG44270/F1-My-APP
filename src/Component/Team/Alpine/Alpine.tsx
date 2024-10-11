import React from "react";
import './Alpine.css';

const TeamAlpine: React.FC = () => {

    return (
        <div className="body-card-team">
            <div className="name-logo">
                <div className="color-name">
                    <div className="color-team-alpine"></div>
                    <div className="name-team">ALPINE</div>
                </div>
                <div className="logo-team">
                    <img className="picture-logo-team" src="/images/Team/Alpine/Logo/alpine-logo.png" alt="logo-alpine" />
                </div>
            </div>
            <div className="border-inter-ligne"></div>
            <div className="team-pilote">
                <div className="pilote-1">
                    <div className="name-pilote">
                        <div className="first-name">Pierre</div>
                        <div className="last-name">Gasly</div>
                    </div>
                    <img className="picture-pilote-1-pierre" src="/images/Team/Alpine/image-pilote/piegas01.png" alt="pilote-1-alpine" />
                </div>
                <div className="border-inter-ligne-pilote-1"></div>
                <div className="pilote-2-ocon">
                    <div className="name-pilote">
                        <div className="first-name">Esteban</div>
                        <div className="last-name">Ocon</div>
                    </div>
                    <img className="picture-pilote-2-ocon" src="/images/Team/Alpine/image-pilote/estoco01.png" alt="pilote-2-alpine" />
                </div>
                <div className="border-inter-ligne-pilote-2"></div>
            </div>
            <div className="monoplace">
                <img className="picture-monoplace" src="/images/Team/Alpine/monoplace/alpine.png" alt="monoplace-alpine" />
            </div>
            <div className="border-line-component-alpine"></div>
        </div>
    );
}

export default TeamAlpine;