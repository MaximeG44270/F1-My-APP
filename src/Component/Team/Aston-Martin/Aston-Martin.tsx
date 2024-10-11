import React from "react";
import './Aston-Martin.css';

const TeamAstonMartin: React.FC = () => {

    return (
        <div className="body-card-team">
            <div className="name-logo">
                <div className="color-name">
                    <div className="color-team-aston"></div>
                    <div className="name-team">ASTON MARTIN</div>
                </div>
                <div className="logo-team">
                    <img className="picture-logo-team" src="/images/Team/Aston-Martin/Logo/aston-martin-logo.png" alt="logo-aston-martin" />
                </div>
            </div>
            <div className="border-inter-ligne"></div>
            <div className="team-pilote">
                <div className="pilote-1">
                    <div className="name-pilote">
                        <div className="first-name">Fernando</div>
                        <div className="last-name">ALONSO</div>
                    </div>
                    <img className="picture-pilote-1-alonso" src="/images/Team/Aston-Martin/image-pilote/feralo01.png" alt="pilote-1-aston-martin" />
                </div>
                <div className="border-inter-ligne-pilote-1"></div>
                <div className="pilote-2-lance">
                    <div className="name-pilote">
                        <div className="first-name">Lance</div>
                        <div className="last-name">STROLL</div>
                    </div>
                    <img className="picture-pilote-2-lance" src="/images/Team/Aston-Martin/image-pilote/lanstr01.png" alt="pilote-2-aston-martin" />
                </div>
                <div className="border-inter-ligne-pilote-2"></div>
            </div>
            <div className="monoplace">
                <img className="picture-monoplace" src="/images/Team/Aston-Martin/monoplace/aston-martin.png" alt="monoplace-aston-martin" />
            </div>
            <div className="border-line-component-aston"></div>
        </div>
    );
}

export default TeamAstonMartin;