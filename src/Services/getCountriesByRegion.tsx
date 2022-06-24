import axios from 'axios';

export default async function getCountriesByRegion(region: string) {
  try {
    const url = `https://restcountries.com/v2/continent/${region}`;
    const countriesByRegion = await axios.get(url);
    return countriesByRegion.data;
  } catch (error) {
    throw new Error('Request failed');
  }
}
