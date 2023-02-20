import React from 'react';

export default function BackCard({ cvc }) {
  return (
    <div className="back-card">
      <span className="card-cvc">{cvc.padStart(3, '0')}</span>
    </div>
  );
}
