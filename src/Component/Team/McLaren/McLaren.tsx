import React from "react";
import './Mclaren.css';

const TeamMcLaren: React.FC = () => {

    return (
        <div className="body-card-team">
            <div className="name-logo">
                <div className="color-name">
                    <div className="color-team-mclaren"></div>
                    <div className="name-team">MCLAREN</div>
                </div>
                <div className="logo-team">
                    <img className="picture-logo-team" src="/images/Team/McLaren/Logo/mclaren-logo.png" alt="logo-maclaren" />
                </div>
            </div>
            <div className="border-inter-ligne"></div>
            <div className="team-pilote">
                <div className="pilote-1">
                    <div className="name-pilote">
                        <div className="first-name">Lando</div>
                        <div className="last-name">NORRIS</div>
                    </div>
                    <img className="picture-pilote-1-lando" src="/images/Team/McLaren/image-pilote/lannor01.png" alt="pilote-1-mclaren" />
                </div>
                <div className="border-inter-ligne-pilote-1"></div>
                <div className="pilote-2-oscar">
                    <div className="name-pilote">
                        <div className="first-name">Oscar</div>
                        <div className="last-name">PIASTRI</div>
                    </div>
                    <img className="picture-pilote-2-oscar" src="/images/Team/McLaren/image-pilote/oscpia01.png" alt="pilote-2-maclaren" />
                </div>
                <div className="border-inter-ligne-pilote-2"></div>
            </div>
            <div className="monoplace">
                <img className="picture-monoplace" src="/images/Team/McLaren/monoplace/mclaren.png" alt="monoplace-mclaren" />
            </div>
            <div className="border-line-component-mclaren"></div>
        </div>
    );
}

export default TeamMcLaren;