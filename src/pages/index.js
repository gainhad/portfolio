import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './index.module.scss';
import ListLink from '../components/ListLink';
import NavList from '../components/NavList';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className={styles.index}>
      <h1 className={styles.name}>Hadley Gaines</h1>
      <p className={styles.tagLine}>
        Here will be a descriptive line that I haven't thought of yet
      </p>
      <img
        src="https://assets.teenvogue.com/photos/5b1dca8039ea107bc58a20e5/1:1/w_662,h_662,c_limit/tout.jpg"
        alt="Headshot of Hadley Gaines"
        className={styles.profilePhoto}
      ></img>
      <NavList id={styles.navList}>
        <ListLink to="/about">About Me</ListLink>
        <ListLink to="/projects">My Projects</ListLink>
        <ListLink to="/contact">Contact Me</ListLink>
      </NavList>
    </div>
  </>
);

export default IndexPage;
