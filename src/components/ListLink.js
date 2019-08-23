import React from 'react';
import { Link } from 'gatsby';

const ListLink = props => (
  <li>
    <Link
      className={props.className}
      to={props.to}
      activeClassName={props.activeClassName}
    >
      {props.children}
    </Link>
  </li>
);

export default ListLink;
