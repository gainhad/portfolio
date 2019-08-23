import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './contact.module.scss';

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <Layout>
      <div className={styles.contact}>
        <h1 id={styles.contactMessage}>
          Interested in discussing potential opportunities, or have any
          questions for me? Please email me at the address below!
        </h1>
        <a
          className={styles.email}
          href="mailto:hadley.gaines@gmail.com"
          target="__blank"
        >
          hadley.gaines@gmail.com
        </a>
      </div>
    </Layout>
  </>
);

export default ContactPage;
