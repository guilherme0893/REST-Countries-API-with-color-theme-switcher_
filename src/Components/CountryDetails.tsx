import React, { useContext, useEffect, useState } from 'react';
import CountryDetailsCard from './CountryDetailsCard';
import GlobalContext from '../Context/GlobalContext';
import IContext from '../Interfaces/IContext';
import getCountryDetails from '../Services/getCountryDetails';

function CountryDetails() {
  const {details, setDetails} = useContext(GlobalContext) as IContext;

  useEffect(() => {
    getCountryDetails(details).then((countryDetails) => setDetails(countryDetails));
  }, [setDetails]);

  return (
    <main
      className="container grid grid-cols-6 gap-16 mx-auto"
    >
      {
        details.map((detail: any, index: number) => (
          <CountryDetailsCard
            key={index}
            name={detail.name.common}
            nativeName={detail.name.nativeName}
            population={detail.population}
            region={detail.region}
            subRegion={detail.subRegion}
            capital={detail.capital}
            flag={detail.flag.sv}
            topLevelDomain={detail.tld}
            currencies={detail.currencies}
            languages={detail.languages}
            borders={detail.borders}
          />
        ))
      }
    </main>
  );
}

export default CountryDetails;
