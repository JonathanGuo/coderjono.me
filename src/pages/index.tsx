import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';

import Experiences from 'App/components/Experiences';
import Layout from 'App/components/layout';
import SEO from 'App/components/seo';
import Splash from 'App/components/Splash';
import 'App/config/Icons';
import { IExperience } from 'App/types/Experience';

interface IProps {
  data: {
    dataJson: {
      about: {
        NZExperienceFrom: string;
      };
      experiences: IExperience[];
    };
  };
}

const Index: FunctionComponent<IProps> = ({ data, ...rest }) => (
  <Layout>
    <SEO title="CoderJono" />
    <Splash about={data.dataJson.about} />
    <Experiences experiences={data.dataJson.experiences} />
  </Layout>
);

export const query = graphql`
  {
    dataJson {
      about {
        NZExperienceFrom
      }
      experiences {
        startDate
        company
        description
        endDate
        jobTitle
        type
        url
      }
    }
  }
`;

export default Index;
