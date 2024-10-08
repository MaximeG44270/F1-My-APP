import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/circuit');
    };

    return (
        <div className="container-max">
            <div className="image-container">
                <div className="animated-text">
                    F1 <span></span>
                </div>
                <div className='button-circuit'>
                    <p className='text-circuit' onClick={handleNavigate}>
                        Accéder au circuit
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
