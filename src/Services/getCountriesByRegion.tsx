import axios from 'axios';

export default async function getCountriesByRegion(region: string) {
  try {
    const regionLowerCase = region.toLowerCase();
    const url = `https://restcountries.com/v3.1/region/${regionLowerCase}`;
    const countriesByRegion = await axios.get(url);
    return countriesByRegion.data;
  } catch (error) {
    throw new Error('Request failed');
  }
}
