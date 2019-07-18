import React from 'react';
import styles from './NavList.module.scss';

const NavList = props => (
  <ul className={styles.navList} id={props.id}>
    {props.children}
  </ul>
);

export default NavList;
