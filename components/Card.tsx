import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg p-4 w-44 h-28">
      {children}
    </div>
  );
};

export default Card;
