import React, { useState } from 'react';
import Paper from '../Paper/Paper';

import Button from '../Button/Button';

import { AiFillPlusCircle } from 'react-icons/ai';
import InfoBlock from '../InfoBlock/InfoBlock';

import css from './Cities.module.css';
import CitiesForm from '../CitiesForm/CitiesForm';

export default function Cities({ data }) {
  const [cities, setCities] = useState(data);
  const [showForm, setShowForm] = useState(false);

  const onShowForm = () => {
    console.log('test');
    setShowForm(!showForm);
  };

  const onAddCity = city => {
    setCities(prev => [...prev, city]);
    setShowForm(false);
  };

  const onDeleteCity = city => {
    setCities(prev => prev.filter(item => item !== city));
  };

  const onEditCity = (city, newCity) => {
    setCities(prev => prev.map(item => (item === city ? newCity : item)));
  };

  return (
    <div className={css.cities}>
      <h1>Cities</h1>
      <div>
        {cities.map((city, index) => {
          return (
            <Paper key={index}>
              <InfoBlock
                type={'CITY'}
                info={city}
                onDelete={onDeleteCity}
                onEdit={onEditCity}
              />
            </Paper>
          );
        })}
      </div>

      {showForm && (
        <Paper>
          <CitiesForm onAddCity={onAddCity} />
        </Paper>
      )}

      <Button
        icon={<AiFillPlusCircle />}
        text={'ADD CITY'}
        onClick={onShowForm}
      />
    </div>
  );
}
