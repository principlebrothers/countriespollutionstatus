import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ImEnter } from 'react-icons/im';

const Country = ({
  id, country, countryCode,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/statistics');
  };

  return (
    <li className="country">
      <ImEnter id={id} onClick={handleClick} />
      <p className="countryName">{country}</p>
      <p className="countryCode">{countryCode}</p>
    </li>
  );
};

Country.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
};

export default Country;
