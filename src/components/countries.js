import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/countries/countries';
import Country from './country';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <ul className="countryContainer">
      {countries.map((country) => (
        <Country
          key={country.ID}
          id={country.ID}
          details={country}
          country={country.Country}
          countryCode={country.CountryCode}
        />
      ))}
    </ul>
  );
};

export default Countries;
