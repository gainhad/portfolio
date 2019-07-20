import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import styles from './project-page.module.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className={styles.page}>
        <h1 id={styles.title}>{post.frontmatter.title}</h1>
        <Img
          className={styles.topImage}
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
