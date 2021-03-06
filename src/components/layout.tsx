import React, { FunctionComponent, ReactNode } from 'react';
import ReactGA from 'react-ga';

import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Header from './header';

import '@fortawesome/fontawesome-svg-core/styles.css';
import './styles/layout.css';

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0;
`;

const Main = styled.main`
  min-height: 100%;
  flex: 1 0 auto;
`;

interface IProps {
  children: ReactNode;
}

// tslint:disable-next-line: no-typeof-undefined
if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-145342146-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
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
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer>
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://www.coderjono.me">CoderJono</a>
      </Footer>
    </Wrapper>
  );
};

export default Layout;
