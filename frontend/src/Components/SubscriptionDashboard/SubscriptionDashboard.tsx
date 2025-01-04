import React, { useEffect, useState } from 'react';
import { subscriptionGetAPI } from '../../Services/SubscriptionService';
import { SubscriptionGet } from '../../Models/Subscription';
import SubscriptionModal from '../../Components/SubscriptionModal/SubscriptionModal';
import './SubscriptionDashboard.css';

const SubscriptionDashboard: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<SubscriptionGet[]>([]);
  const [selectedSubscription, setSelectedSubscription] = useState<SubscriptionGet | null>(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const fetchedSubscriptions = await subscriptionGetAPI();
      if (fetchedSubscriptions) {
        setSubscriptions(fetchedSubscriptions);
      }
    };
    fetchSubscriptions();
  }, []);

  return (
    <div className="dashboard">
      {subscriptions.map((sub) => (
        <div
          key={sub.id}
          className="subscription-card"
          onClick={() => setSelectedSubscription(sub)}
        >
          <h3 className="card-title">{sub.serviceName}</h3>
          <p className="card-cost">${sub.cost.toFixed(2)} / {sub.billingFrequency}</p>
        </div>
      ))}
      {selectedSubscription && (
        <SubscriptionModal
          subscription={selectedSubscription}
          onClose={() => setSelectedSubscription(null)}
        />
      )}
    </div>
  );
};

export default SubscriptionDashboard;
