import React from 'react';
import { Link } from 'gatsby';
import styles from './layout.module.scss';
import ListLink from './ListLink';

const Layout = props => {
  return (
    <>
      <div className={styles.navBar}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <ul className={styles.navList}>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/projects">Projects</ListLink>
          <ListLink to="/contact">Contact</ListLink>
        </ul>
      </div>
      {props.children}
    </>
  );
};

export default Layout;
