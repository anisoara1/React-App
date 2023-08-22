import React, { useState } from 'react';
import Paper from '../Paper/Paper';
import Button from '../Button/Button';
import Tutor from '../Tutor/Tutor';
import TutorForm from '../TutorForm/TutorForm';
import { AiFillPlusCircle } from 'react-icons/ai';
import css from './Tutors.module.css';

export default function Tutors({ tutors }) {
  const [showForm, setShowForm] = useState(false);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={css.tutors}>
      <h1>Tutors</h1>
      {tutors?.map((tutor, index) => {
        return (
          <Paper key={index}>
            <Tutor
              city={tutor.city}
              email={tutor.email}
              firstName={tutor.firstName}
              lastName={tutor.lastName}
              options={tutor.options}
              phone={tutor.phone}
            />
          </Paper>
        );
      })}

      {showForm && (
        <Paper>
          <TutorForm />
        </Paper>
      )}

      <Button
        icon={<AiFillPlusCircle />}
        text={'ADD TUTOR'}
        declansator={onShowForm}
      />
    </div>
  );
}
