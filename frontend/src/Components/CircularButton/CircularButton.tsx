import React from 'react';
import './CircularButton.css';

type CircularButtonProps = {
  onClick: () => void;
};

const CircularButton: React.FC<CircularButtonProps> = ({ onClick }) => {
  return (
    <button className="circular-button" onClick={onClick}>
      Cancel
    </button>
  );
};

export default CircularButton;
