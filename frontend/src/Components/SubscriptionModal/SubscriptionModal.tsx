import React from 'react';
import './SubscriptionModal.css';

type SubscriptionModalProps = {
  subscription: {
    serviceName: string;
    cost: number;
    billingFrequency: string;
    createdAt: string;
    nextBillingDate: string;
  };
  onClose: () => void;
};

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ subscription, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Top Left: Service Name */}
        <h2 className="modal-title">{subscription.serviceName}</h2>

        {/* Center: Properties in Two Columns */}
        <div className="modal-properties">
          <div className="modal-column">
            <p><strong>Cost:</strong> ${subscription.cost.toFixed(2)}</p>
            <p><strong>Billing Frequency:</strong> {subscription.billingFrequency}</p>
          </div>
          <div className="modal-column">
            <p><strong>Next Billing Date:</strong> {new Date(subscription.nextBillingDate).toLocaleDateString()}</p>
            <p><strong>Created At:</strong> {new Date(subscription.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Bottom Buttons: Modify, Delete, and Close */}
        <div className="modal-action-buttons">
          <button className="modal-button modify-button">Modify</button>
          <button className="modal-button delete-button">Delete</button>
          <button className="modal-close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
