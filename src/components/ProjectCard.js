import React from 'react';
import Img from 'gatsby-image';
import styles from './ProjectCard.module.scss';

const ProjectCard = props => (
  <div className={styles.projectCard}>
    <Img fluid={props.image} />
    <h3 className={styles.title}>{props.title}</h3>
  </div>
);

export default ProjectCard;
