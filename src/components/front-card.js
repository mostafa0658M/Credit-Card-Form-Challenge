import React from 'react';

export default function BackCard({ data }) {
  return (
    <div className="front-card">
      <svg
        width="84"
        height="47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
        <path
          d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
          stroke="#fff"
        />
      </svg>
      <span className="card-number">
        {String(data.cardNumber)
          .replaceAll(' ', '')
          .padEnd(16, '0')
          .replace(/\w{4}(?=.)/g, '$& ')}
      </span>
      <div className="front-card-details">
        <span className="card-name">
          {data.name ? data.name : 'Jane Appleseed'}
        </span>
        <span className="card-date">
          {String(data.expDate.split('-')[1]).padStart(2, '0')}/
          {String(data.expDate.split('-')[0]).padStart(4, '0')}
        </span>
      </div>
    </div>
  );
}
