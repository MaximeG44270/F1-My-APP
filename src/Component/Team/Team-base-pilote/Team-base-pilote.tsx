import React, { useEffect, useState } from "react";
import "./Team-base-pilote.css";

interface Driver {
    firstName: string;
    lastName: string;
    image: string;
}

interface Team {
    name: string;
    teamColor: string;
    logo: string;
    drivers: Driver[];
    monoplace: string;
}

const TeamBasePilote: React.FC<{ team: Team }> = ({ team }) => {
    const [currentDrivers, setCurrentDrivers] = useState<Driver[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentDrivers(team.drivers.slice(currentIndex, currentIndex + 2));
    }, [team, currentIndex]);

    return (
        <div className="team-pilote">
            {currentDrivers.map((driver, driverIndex) => (
                <React.Fragment key={driverIndex}>
                    <div className={`pilote-${driverIndex + 1}`}>
                        <div className="name-pilote">
                            <div className="first-name">{driver.firstName}</div>
                            <div className="last-name">{driver.lastName}</div>
                        </div>
                        <img
                            className={`picture-pilote-team`}
                            src={driver.image}
                            alt={`pilote-${driverIndex + 1}-${team.name.toLowerCase().replace(' ', '-')}`}
                        />
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default TeamBasePilote;