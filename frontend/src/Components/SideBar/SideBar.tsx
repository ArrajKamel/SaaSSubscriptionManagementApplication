import React from 'react';
import './Sidebar.css';

type SidebarProps = {
  setActiveView: (view: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setActiveView }) => {
  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => setActiveView('subscriptions')}>
        My Subscriptions
      </button>
      <button className="sidebar-button" onClick={() => setActiveView('analysis')}>
        Analysis
      </button>
    </div>
  );
};

export default Sidebar;
