import axios from 'axios';

export default async function getCountryDetails(country: string) {
  try {
    const countryName = country.toLowerCase();
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    const details = await axios.get(url);
    return details.data;
  } catch (error) {
    throw new Error('Request failed');
  }
}
