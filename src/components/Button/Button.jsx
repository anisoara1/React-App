import React from 'react';
import css from './Button.module.css';

export default function Button({ text, icon, onClick }) {
  return (
    <button onClick={onClick} className={css.button}>
      {text}
      {icon}
    </button>
  );
}
