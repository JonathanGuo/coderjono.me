import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';

import Layout from 'App/components/layout';
import SEO from 'App/components/seo';
import Splash from 'App/components/Splash';

interface IProps {
  data: {
    allDataJson: {
      edges: [
        {
          node: {
            about: {
              NZExperienceFrom: string;
            };
          };
        },
      ];
    };
  };
}

const Index: FunctionComponent<IProps> = ({ data, ...rest }) => (
  <Layout>
    <SEO title="CoderJono" />
    <Splash about={data.allDataJson.edges[0].node.about} />
  </Layout>
);

export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          about {
            NZExperienceFrom
          }
        }
      }
    }
  }
`;

export default Index;
