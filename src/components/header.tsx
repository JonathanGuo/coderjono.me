import React, { FunctionComponent } from 'react';

import { Link } from 'gatsby';

interface IProps {
  siteTitle: string;
}

const Header: FunctionComponent<IProps> = ({ siteTitle }) => (
  <header className="mb-2 bg-transparent">
    <div className="container mx-auto py-6 px-4">
      <h1 className="m-0">
        <Link to="/" className="text-gray-700">
          {`{${siteTitle}}`}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
