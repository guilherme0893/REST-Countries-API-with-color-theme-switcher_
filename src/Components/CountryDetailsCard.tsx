/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import CountriesDetailsProps from '../Types/countriesDetailsProps';

function CountryDetailsCard(props: CountriesDetailsProps) {
  const {
    name, nativeName, population, region, subRegion, capital, flag, topLevelDomain, currencies, languages
  } = props;

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

export default CountryDetailsCard;
