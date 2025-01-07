import React from 'react';
import CircularButton from '../../Components/CircularButton/CircularButton';
import './PremiumPage.css';

type Props = {};

const PremiumPage = (props: Props) => {
    const onClick = () => console.log("Cancel button clicked from Premium Page");

    return (
        <div className="premium-page">
            <h1 className="neon-coming-soon">COMING SOON</h1>
            <CircularButton onClick={onClick} />
        </div>
    );
};

export default PremiumPage;
