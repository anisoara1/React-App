import React from 'react';

import css from './Modal.module.css';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={css.modalOverlay}>
      <input onChange></input>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
