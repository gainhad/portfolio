import React from 'react';
import { Link } from 'gatsby';
import styles from './layout.module.scss';

const Layout = props => {
  return (
    <>
      <div className={styles.navBar}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <div className={styles.navList}>
          <Link
            to="/about"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contact
          </Link>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default Layout;
