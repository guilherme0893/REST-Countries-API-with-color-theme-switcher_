import axios from 'axios';

export default async function getCountries() {
  try {
    const url = 'https://restcountries.com/v3.1/all';
    const countries = await axios.get(url);
    return countries.data;
  } catch (error) {
    throw new Error('Request failed');
  }
}
