import React from 'react';
import { useNavigate } from 'react-router-dom';

const FourthPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Fourth Page in T1-Repo</h1>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <button onClick={() => navigate('/third')}>Back</button>
            </div>
        </div>
    );
};

export default FourthPage;