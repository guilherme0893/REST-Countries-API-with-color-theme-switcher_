import React from 'react';

type countriesProps = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

function CountryCard(props: countriesProps) {
  const { name, population, region, capital, flag } = props;
  return (
    <div
      data-testid='country-card'
      className='container max-w-sm rounded overflow-hidden shadow-lg'
    >
      <div className='flex flex-col '>
        <img className='h-1/2 w-full' src={ flag } alt={ name }/>
        <div className='m-4 text-sm'>
          <h3 className='font-medium mb-4'>{ name }</h3>          
          <div className='flex'>
            <p className='font-medium'>Population:</p>
            <p className='ml-2'>{ population }</p>
          </div>
          <div className='flex'>
            <p className='font-medium'>Region:</p>
            <p className='ml-2'>{ region }</p>
          </div>
          <div className='flex'>
            <p className='font-medium'>Capital:</p>
            <p className='ml-2'>{ capital }</p>
          </div>
        </div>          
      </div>
    </div>
  )
};

export default CountryCard;
