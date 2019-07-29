import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';

import FullScreenContainer from 'App/components/Common/FullScreenContainer';
import Experiences from 'App/components/Experiences';
import Layout from 'App/components/layout';
import PersonalSkills from 'App/components/sections/PersonalSkills';
import ProfessionalSkills from 'App/components/sections/ProfessionalSkills';
import Splash from 'App/components/sections/Splash';
import SEO from 'App/components/seo';
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
    <FullScreenContainer>
      <ProfessionalSkills />
      <PersonalSkills />
    </FullScreenContainer>
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
