import React from 'react';
import PropTypes from 'prop-types';
import css from './Tutor.module.css';

export default function Tutor({
  city,
  email,
  firstName,
  lastName,
  options,
  phone,
}) {
  return (
    <div className={css.tutor}>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{city}</p>
      <p>{options}</p>
    </div>
  );
}

Tutor.propTypes = {
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};
