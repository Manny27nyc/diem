// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';

const FormHeader = ({ title, subtitle }) => {
  return (
    <header className="formHero">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
};

export default FormHeader;
