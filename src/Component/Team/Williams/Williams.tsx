import React from "react";
import './Williams.css';

const TeamWilliams: React.FC = () => {

    return (
        <div className="body-card-team">
            <div className="name-logo">
                <div className="color-name">
                    <div className="color-team-williams"></div>
                    <div className="name-team">WILLIAMS</div>
                </div>
                <div className="logo-team">
                    <img className="picture-logo-team" src="/images/Team/Williams/Logo/williams-logo.png" alt="logo-williams" />
                </div>
            </div>
            <div className="border-inter-ligne"></div>
            <div className="team-pilote">
                <div className="pilote-1">
                    <div className="name-pilote">
                        <div className="first-name">Alexander</div>
                        <div className="last-name">ALBON</div>
                    </div>
                    <img className="picture-pilote-1-albon" src="/images/Team/Williams/image-pilote/alealb01.png" alt="pilote-1-williams" />
                </div>
                <div className="border-inter-ligne-pilote-1"></div>
                <div className="pilote-2-franco">
                    <div className="name-pilote">
                        <div className="first-name">Franco</div>
                        <div className="last-name">COLAPINTO</div>
                    </div>
                    <img className="picture-pilote-2-franco" src="/images/Team/Williams/image-pilote/fracol01.png" alt="pilote-2-williams" />
                </div>
                <div className="border-inter-ligne-pilote-2"></div>
            </div>
            <div className="monoplace">
                <img className="picture-monoplace" src="/images/Team/Williams/monoplace/williams.png" alt="monoplace-williams" />
            </div>
            <div className="border-line-component-williams"></div>
        </div>
    );
}

export default TeamWilliams;