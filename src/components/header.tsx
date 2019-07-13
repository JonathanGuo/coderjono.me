import React, { FunctionComponent } from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

interface IProps {
  siteTitle: string;
}

const Header: FunctionComponent<IProps> = ({ siteTitle }) => (
  <header className="w-full mx-auto mb-2 py-4 bg-transparent pin-t fixed">
    <div className="container mx-auto flex justify-between">
      <h1 className="m-0">
        <Link to="/" className="text-gray-700 text-3xl font-light">
          {`<${siteTitle} />`}
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/JonathanGuo">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
