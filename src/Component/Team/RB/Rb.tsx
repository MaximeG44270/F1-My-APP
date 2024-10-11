import React from "react";
import './Rb.css';

const TeamRb: React.FC = () => {

    return (
        <div className="body-card-team">
            <div className="name-logo">
                <div className="color-name">
                    <div className="color-team-rb"></div>
                    <div className="name-team">RB</div>
                </div>
                <div className="logo-team">
                    <img className="picture-logo-team" src="/images/Team/RB/Logo/rb-logo.png" alt="logo-rb" />
                </div>
            </div>
            <div className="border-inter-ligne"></div>
            <div className="team-pilote">
                <div className="pilote-1">
                    <div className="name-pilote">
                        <div className="first-name">Yuki</div>
                        <div className="last-name">TSUNODA</div>
                    </div>
                    <img className="picture-pilote-1-yuki" src="/images/Team/RB/image-pilote/yuktsu01.png" alt="pilote-1-rb" />
                </div>
                <div className="border-inter-ligne-pilote-1"></div>
                <div className="pilote-2-liam">
                    <div className="name-pilote">
                        <div className="first-name">Liam</div>
                        <div className="last-name">LAWSON</div>
                    </div>
                    <img className="picture-pilote-2-liam" src="/images/Team/RB/image-pilote/lialaw01.png" alt="pilote-2-rb" />
                </div>
                <div className="border-inter-ligne-pilote-2"></div>
            </div>
            <div className="monoplace">
                <img className="picture-monoplace" src="/images/Team/RB/monoplace/rb.png" alt="monoplace-rb" />
            </div>
            <div className="border-line-component-rb"></div>
        </div>
    );
}

export default TeamRb;