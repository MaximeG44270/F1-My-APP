// src/Component/Pilote/pilote-base.tsx

import React, { useEffect, useState } from 'react';
import './pilote-base.css';

interface Driver {
  firstName: string;
  lastName: string;
  teamColor: string;
  countryOfOrigin: string;
  teamName: string;
  number: string;
  profilPicture: string;
}

const PiloteBase: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    fetch('/json/pilote.json')
      .then(response => response.json())
      .then(data => setDrivers(data.drivers))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div className="pilote-list">
      {drivers.map(driver => (
        <div key={driver.number} className="body-card-pilote">
          <div className='container-pilote-top'>
            <div className="container-color-name">
              <div className="container-color-team-pilote" style={{ backgroundColor: driver.teamColor }}></div>
              <div className="name-pilote">
                <div className="first-name-pilote">{driver.firstName}</div>
                <div className="last-name-pilote">{driver.lastName}</div>
              </div>
            </div>
            <img className="origin-pays" src={driver.countryOfOrigin} />
          </div>
          <div className="border-inter-ligne-pilote"></div>
          <div className="container-info-pilote">
            <div className="name-team-pilote">{driver.teamName}</div>
            <div className="container-number-picture">
              <div className="number-pilote" style={{ color: driver.teamColor }}>{driver.number}</div>
              <img className="picture-pilote" src={driver.profilPicture} alt={`${driver.firstName} ${driver.lastName}`} />
            </div>
          </div>
          <div className="border-line-component-pilote" style={{ borderColor: driver.teamColor }}></div>
        </div>
      ))}
    </div>
  );
};

export default PiloteBase;
