import React from 'react';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';
import styles from './projects.module.scss';
import Layout from '../components/layout';
import ProjectCard from '../components/ProjectCard';

const Projects = ({ data }) => {
  return (
    <>
      <SEO title="projects" />
      <Layout>
        <div className={styles.projects}>
          <h2 className={styles.title}>Web Apps</h2>
          <div className={styles.projectList}>
            {data.allMarkdownRemark.nodes.map(node => (
              <Link to={node.fields.slug}>
                <ProjectCard
                  title={node.frontmatter.title}
                  image={node.frontmatter.featuredImage.childImageSharp.fluid}
                  slug={node.fields.slug}
                />
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query Projects {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/web-apps/" } }) {
      nodes {
        fileAbsolutePath
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
        fields {
          slug
        }
      }
    }
  }
`;

export default Projects;
