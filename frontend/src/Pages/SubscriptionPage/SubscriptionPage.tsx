import React, { useState } from 'react';
import './SubscriptionPage.css';
import Sidebar from '../../Components/SideBar/SideBar';
import NewSubscriptionDashboard from '../../Components/NewSubscriptionDashboard/NewSubscriptionDashboard'
import SubscriptionDashboard from '../../Components/SubscriptionDashboard/SubscriptionDashboard';

const SubscriptionPage: React.FC = () => {
  const [activeView, setActiveView] = useState('subscriptions');

  return (
    <div className="subscription-page">
      <Sidebar setActiveView={setActiveView} />
      <div className="dashboard-container">
        {activeView === 'subscriptions' && <SubscriptionDashboard />}
        {activeView === 'new-sub' && <NewSubscriptionDashboard />}
        {activeView === 'analysis' && <div className="placeholder">Analysis View Coming Soon...</div>}
      </div>
    </div>
  );
};

export default SubscriptionPage;
