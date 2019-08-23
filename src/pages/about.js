import React from 'react';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import styles from './about.module.scss';
import Layout from '../components/layout';

const About = ({ data }) => {
  console.log(data);
  const doc = data.markdownRemark;
  console.log(doc.html);
  return (
    <>
      <SEO title="about" />
      <Layout>
        <div
          dangerouslySetInnerHTML={{ __html: doc.html }}
          className={styles.content}
        />
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    markdownRemark(fields: { slug: { eq: "/about/" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default About;
