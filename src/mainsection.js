import React from 'react';
import { useState } from 'react';
import { FormInput } from './components';

export default function MainSection({ values, setValues }) {
  const [confirmed, setConfirmed] = useState(false);
  const inputs = [
    {
      title: 'cardholder name',
      name: 'name',
      type: 'text',
      placeholder: 'e.g. Jane Appleseed',
      pattern: '[a-zA-Z\\s]{3,}',
      error: 'Please write your correct name e.g. Mostafa Mohamed',
    },
    {
      title: 'Card Number',
      name: 'cardNumber',
      type: 'text',
      placeholder: 'e.g. 1234 5678 9123 0000',
      pattern: '[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}',
      maxlength: '19',
      error: 'Pls make sure you are wrote 16 numbers',
    },
    {
      title: 'Exp. Date (YY-MM)',
      name: 'expDate',
      type: 'month',
      placeholder: 'YY-MM',
    },
    {
      title: 'cvc',
      name: 'cvc',
      type: 'text',
      placeholder: 'e.g. 123',
      pattern: '[0-9]{3}',
      maxlength: '3',
      error: 'cvc is 3 numbers.',
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name == 'cardNumber') {
      e.target.value = e.target.value
        .replaceAll(' ', '')
        .replace(/\w{4}(?=.)/g, '$& ');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };
  return (
    <div className="main-section">
      <form onSubmit={handleSubmit}>
        {confirmed == false ? (
          inputs.map((input) => (
            <FormInput key={input.name} onChange={onChange} {...input} />
          ))
        ) : (
          <div className="thank-message">
            <svg
              width="80"
              height="80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="url(#a)" />
              <path
                d="M28 39.92 36.08 48l16-16"
                stroke="#fff"
                stroke-width="3"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="-23.014"
                  y1="11.507"
                  x2="0"
                  y2="91.507"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6348FE" />
                  <stop offset="1" stop-color="#610595" />
                </linearGradient>
              </defs>
            </svg>
            <p>THANK YOU!</p>
            <span>We've added your card details</span>
          </div>
        )}
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
