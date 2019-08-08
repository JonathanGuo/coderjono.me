import React, { FunctionComponent } from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface IProps {
  siteTitle: string;
}

const BrandLink = styled(props => (
  <Link {...props} className={`inverse font-light ${props.className}`} />
))`
  font-size: 1.4rem;
`;

const Nav = styled.nav`
  & > ul {
    & > li {
      float: left;
      padding: 0 0.5rem;
    }
  }
`;

const Header: FunctionComponent<IProps> = ({ siteTitle }) => (
  <header className="w-full mx-auto mb-2 py-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="m-0">
        <BrandLink to="/">{`<${siteTitle} />`}</BrandLink>
      </h1>
      <Nav>
        <ul>
          <li>
            <Link className="inverse" to="contact">
              <FontAwesomeIcon icon="phone" fixedWidth={true} /> Contact
            </Link>
          </li>
          <li>
            <a className="inverse" href="https://github.com/JonathanGuo">
              <FontAwesomeIcon icon={['fab', 'github']} fixedWidth={true} />{' '}
              GitHub
            </a>
          </li>
        </ul>
      </Nav>
    </div>
  </header>
);

export default Header;
