import React from 'react';
import { Photographer } from '../types/Photographer';

interface SimpleCardProps {
  photographers: Photographer[];
}

const SimpleCard: React.FC<SimpleCardProps> = ({ photographers }) => {
  if (!photographers || photographers.length === 0) {
    return <div>No photographers found</div>;
  }

  const photographer = photographers[0];

  return (
    <div style={{
      width: '320px',
      height: '500px',
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      margin: '20px auto',
      overflow: 'hidden'
    }}>
      <div style={{ height: '65%', overflow: 'hidden' }}>
        <img 
          src={photographer.image} 
          alt={photographer.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>{photographer.name}</h3>
        <p style={{ margin: '0', color: '#7f8c8d', fontSize: '14px' }}>{photographer.bio}</p>
      </div>
    </div>
  );
};

export default SimpleCard;