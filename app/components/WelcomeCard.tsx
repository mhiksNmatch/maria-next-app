'use client';
import React from 'react';

interface WelcomeCardProps {
  message: string;
  name: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ message, name }) => {
  return (
    <div className="card">
      <h2>Welcome Card</h2>
      <h3>{message}</h3>
      <p><strong>Name: {name}</strong></p>
      <div className="color-dots">
        <span className="dot dot1"></span>
        <span className="dot dot2"></span>
        <span className="dot dot3"></span>
        <span className="dot dot4"></span>
      </div>
    </div>
  );
};

export default WelcomeCard;
