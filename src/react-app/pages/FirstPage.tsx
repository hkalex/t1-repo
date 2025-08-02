import React from 'react';
import { useNavigate } from 'react-router-dom';

const FirstPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/second');
    };

    return (
        <div>
            <h1>First Page in T1-Repo</h1>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default FirstPage;