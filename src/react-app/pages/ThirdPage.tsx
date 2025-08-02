import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThirdPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Third Page in T1-Repo</h1>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <button onClick={() => navigate('/second')}>Back</button>
                <button onClick={() => navigate('/fourth')}>Next</button>
            </div>
        </div>
    );
};

export default ThirdPage;