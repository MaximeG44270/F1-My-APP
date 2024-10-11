import React from "react";
import './Kick-Sauber.css';

const TeamKickSauber: React.FC = () => {

    return (
        <div className="body-card-team">
            <div className="name-logo">
                <div className="color-name">
                    <div className="color-team-kick-sauber"></div>
                    <div className="name-team">KICK SAUBER</div>
                </div>
                <div className="logo-team">
                    <img className="picture-logo-team" src="/images/Team/Kick-Sauber/Logo/kick-sauber-logo.png" alt="logo-sauber" />
                </div>
            </div>
            <div className="border-inter-ligne"></div>
            <div className="team-pilote">
                <div className="pilote-1">
                    <div className="name-pilote">
                        <div className="first-name">Valtteri</div>
                        <div className="last-name">BOTTAS</div>
                    </div>
                    <img className="picture-pilote-1-valtteri" src="/images/Team/Kick-Sauber/image-pilote/valbot.png" alt="pilote-1-sauber" />
                </div>
                <div className="border-inter-ligne-pilote-1"></div>
                <div className="pilote-2-zhou">
                    <div className="name-pilote">
                        <div className="first-name">Guanyu</div>
                        <div className="last-name">ZHOU</div>
                    </div>
                    <img className="picture-pilote-2-zhou" src="/images/Team/Kick-Sauber/image-pilote/guazho.png" alt="pilote-2-sauber" />
                </div>
                <div className="border-inter-ligne-pilote-2"></div>
            </div>
            <div className="monoplace">
                <img className="picture-monoplace" src="/images/Team/Kick-Sauber/monoplace/kick-sauber.png" alt="monoplace-sauber" />
            </div>
            <div className="border-line-component-sauber"></div>
        </div>
    );
}

export default TeamKickSauber;