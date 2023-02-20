import React from 'react';

export default function FormInput({ onChange, title, error, ...inputvalues }) {
  return (
    <div className={inputvalues.name + '-input info-input'}>
      <p className="input-title">{title}</p>
      <input onChange={onChange} {...inputvalues} required />
      <span className="error">{error}</span>
    </div>
  );
}
