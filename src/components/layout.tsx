/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent, ReactNode } from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import './layout.css';

interface IProps {
  children: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="text-center">
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://www.coderjono.me">CoderJono</a>
      </footer>
    </div>
  );
};

export default Layout;
