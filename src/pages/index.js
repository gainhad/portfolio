import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import styles from './index.module.scss';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const IndexPage = ({ data }) => {
  console.log(data);
  console.log(data.file.childImageSharp.fluid);
  return (
    <>
      <SEO title="Home" />
      <div className={styles.background}></div>
      <div className={styles.index}>
        <h1 className={styles.name}>Hadley Gaines</h1>
        <p className={styles.tagLine}>
          Recent U of M grad (May 2019), former staff for a governor, and
          current aspiring web developer.
        </p>
        <Img
          fluid={data.file.childImageSharp.fluid}
          className={styles.profilePhoto}
        />
        <div id={styles.navList}>
          <Link className={styles.link} to="/about">
            About Me
          </Link>
          <Link className={styles.link} to="/projects">
            My Projects
          </Link>
          <Link className={styles.link} to="/contact">
            Contact Me
          </Link>
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "headshot.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
