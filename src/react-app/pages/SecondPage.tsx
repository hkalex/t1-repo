import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Second Page in T1-Repo</h1>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <button onClick={() => navigate('/first')}>Back</button>
                <button onClick={() => navigate('/third')}>Next</button>
            </div>
        </div>
    );
};

export default SecondPage;