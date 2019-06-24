/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';

import { graphql, useStaticQuery } from 'gatsby';

interface IMetaProps {
  content: any;
  name: string;
  property?: undefined;
}

interface IProps {
  description?: string;
  lang?: string;
  meta?: IMetaProps[];
  title: string;
}

const SEO: FunctionComponent<IProps> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  let allMetas = [
    {
      content: metaDescription,
      name: `description`,
    },
    {
      content: title,
      property: `og:title`,
    },
    {
      content: metaDescription,
      property: `og:description`,
    },
    {
      content: `website`,
      property: `og:type`,
    },
    {
      content: `summary`,
      name: `twitter:card`,
    },
    {
      content: site.siteMetadata.author,
      name: `twitter:creator`,
    },
    {
      content: title,
      name: `twitter:title`,
    },
    {
      content: metaDescription,
      name: `twitter:description`,
    },
  ];

  if (meta) {
    allMetas = allMetas.concat(meta);
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={allMetas}
    />
  );
};

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
};

export default SEO;
