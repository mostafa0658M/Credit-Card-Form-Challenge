import React from 'react';
import { useState } from 'react';
import { BackCard, FrontCard, FormInput } from './components';
import MainSection from './mainsection';
import './style.css';

export default function App() {
  const [values, setValues] = useState({
    name: '',
    cardNumber: '',
    expDate: '-',
    cvc: '',
  });

  return (
    <div className="main-container">
      <div className="bg-section">
        <FrontCard data={values} />
        <BackCard cvc={values.cvc} />
      </div>
      <MainSection values={values} setValues={setValues} />
    </div>
  );
}
