import React from 'react';
import './PlanCard.css';

type PlanCardProps = {
  title: string;
  cost: string;
  features: string[];
  isPremium: boolean;
};

const PlanCard: React.FC<PlanCardProps> = ({ title, cost, features, isPremium }) => {
  return (
    <div className={`plan-card ${isPremium ? 'premium-card' : 'free-card'}`}>
      <h2 className="plan-title">{title}</h2>
      <p className="plan-cost">{cost}</p>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index} className="plan-feature">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
