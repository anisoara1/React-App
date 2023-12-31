import React, { useState } from 'react';
import css from './CitiesForm.module.css';

export default function CitiesForm({ onAddCity }) {
  const [city, setCity] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(city);
    onAddCity(city);
  };

  return (
    <div className={css.container}>
      <h3>Add a city!</h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="city"
            placeholder="City*"
            required
            value={city}
            onChange={event => setCity(event.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
