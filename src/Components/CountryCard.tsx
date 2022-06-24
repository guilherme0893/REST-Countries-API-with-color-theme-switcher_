/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import countriesProps from '../Types/countriesProps';

function CountryCard(props: countriesProps) {
  const {
    name, population, region, capital, flag,
  } = props;
  const [stroke, setStroke] = useState('currentColor');

  const onIconClick = () => {
    stroke === 'currentColor' ? setStroke('green') : setStroke('currentColor');
  };

  return (
    <div
      data-testid="country-card"
      className="container max-w-sm rounded overflow-hidden shadow-lg"
    >
      <div className="flex flex-col ">
        <img className="h-1/2 w-full" src={flag} alt={name} />
        <div className="m-4 text-sm d-flex">
          <div className="flex">
            <h3 className="font-medium mb-4 mr-2">{ name }</h3>
            <svg
              onClick={onIconClick}
              className="w-6 h-6"
              fill="none"
              stroke={stroke}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex">
            <p className="font-medium">Population:</p>
            <p className="ml-2">{ population }</p>
          </div>
          <div className="flex">
            <p className="font-medium">Region:</p>
            <p className="ml-2">{ region }</p>
          </div>
          <div className="flex">
            <p className="font-medium">Capital:</p>
            <p className="ml-2">{ capital }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
