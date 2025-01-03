import React from 'react';
import PlanCard from '../../Components/PlanCard/PlanCard';
import './PremiumPlanPage.css';

const PremiumPlanPage: React.FC = () => {
  const freePlanFeatures = [
    'Add, update, or remove subscriptions.',
    'Automated reminders for payment due dates.',
    'Visual representation of expenses (graphs and charts).',
    'Analysis by categories and time period.',
  ];

  const premiumPlanFeatures = [
    'Cancel subscriptions with one click.',
    'Track and confirm successful cancellations.',
    'Predict upcoming subscription expenses.',
    'Set budgets and receive alerts when nearing the limit.',
    'Custom alerts for price changes or unused services.',
  ];

  return (
    <div className="premium-plan-page">
      <h1 className="page-title">Choose Your Plan</h1>
      <div className="plan-container">
        <PlanCard
          title="Free Plan"
          cost="Free"
          features={freePlanFeatures}
          isPremium={false}
        />
        <PlanCard
          title="Premium Plan"
          cost="$9.99/month"
          features={premiumPlanFeatures}
          isPremium={true}
        />
      </div>
    </div>
  );
};

export default PremiumPlanPage;
