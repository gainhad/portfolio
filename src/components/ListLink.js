import React from 'react';
import { Link } from 'gatsby';
import styles from './ListLink.module.scss';

const ListLink = props => (
  <li>
    <Link className={styles.listLink} to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default ListLink;
