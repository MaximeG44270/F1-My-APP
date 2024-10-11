import React from "react";
import './Red-Bull-Racing.css';

const TeamRedBullRacing: React.FC = () => {

    return (
        <div className="body-card-team">
            <div className="name-logo">
                <div className="color-name">
                    <div className="color-team-rbr"></div>
                    <div className="name-team">RED BULL RACING</div>
                </div>
                <div className="logo-team">
                    <img className="picture-logo-team" src="/images/Team/Red-Bull-Racing/Logo/red-bull-racing-logo.png" alt="logo-rbr" />
                </div>
            </div>
            <div className="border-inter-ligne"></div>
            <div className="team-pilote">
                <div className="pilote-1">
                    <div className="name-pilote">
                        <div className="first-name">Max</div>
                        <div className="last-name">VERSTAPPEN</div>
                    </div>
                    <img className="picture-pilote-1-max" src="/images/Team/Red-Bull-Racing/image-pilote/maxver01.png" alt="pilote-1-rbr" />
                </div>
                <div className="border-inter-ligne-pilote-1"></div>
                <div className="pilote-2-sergio">
                    <div className="name-pilote">
                        <div className="first-name">Sergio</div>
                        <div className="last-name">PEREZ</div>
                    </div>
                    <img className="picture-pilote-2-sergio" src="/images/Team/Red-Bull-Racing/image-pilote/serper01.png" alt="pilote-2-rbr" />
                </div>
                <div className="border-inter-ligne-pilote-2"></div>
            </div>
            <div className="monoplace">
                <img className="picture-monoplace" src="/images/Team/Red-Bull-Racing/monoplace/red-bull-racing.png" alt="monoplace-rbr" />
            </div>
            <div className="border-line-component-rbr"></div>
        </div>
    );
}

export default TeamRedBullRacing;