import React from 'react';
/* import Menu from '../Menu/Menu.jsx'; */
/* import { BiSolidUserCircle } from 'react-icons/bi'; */
import css from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <div className={css.sidebar__block} />
      {/*   <Menu />
      <div className={css.username}>
        <BiSolidUserCircle className={css.username__icon} />
        <p className={css.username__text}>Bill Gates</p>
      </div> */}
    </div>
  );
}

export default Sidebar;
