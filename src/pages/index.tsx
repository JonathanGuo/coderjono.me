import React, { FunctionComponent } from 'react';

import Tippy from '@tippy.js/react';
import { graphql, Link } from 'gatsby';
import Particles from 'react-particles-js';
import styled from 'styled-components';

import Layout from '../components/layout';
import ScrollDownMouse from '../components/ScrollDownMouse';
import SEO from '../components/seo';
import SplashParticles from '../components/SplashParticles';
import { diffFromNow, formatNZDate } from '../helpers/DateHelper';

interface IProps {
  data: {
    allDataJson: {
      nodes: [
        {
          about: {
            NZExperienceFrom: string;
          };
        },
      ];
    };
  };
}

const FullHeightContainer = styled.div`
  height: 100vh;
`;

const HeroText = styled.p`
  position: absolute;
  top: 50%;
  left: 25%;
  width: 50%;
  transform: translateY(-50%);
  line-height: 2;
  font-size: 2vh;
  font-weight: 300;

  @media (max-width: 768px) {
    left: 5%;
    width: 90%;
  }
`;

const ExperienceAbbr = styled.abbr`
  border-bottom: 0.1rem dotted #000;
  cursor: help;
`;

const Index: FunctionComponent<IProps> = ({ data, ...rest }) => (
  <Layout>
    <SEO title="CoderJono" />
    <FullHeightContainer>
      <HeroText>
        <span>I&rsquo;m a Senior Full Stack Developer who has over </span>
        <Tippy
          content={`Since ${formatNZDate(
            data.allDataJson.nodes[0].about.NZExperienceFrom,
          )}`}>
          <ExperienceAbbr>
            {diffFromNow(data.allDataJson.nodes[0].about.NZExperienceFrom)}
          </ExperienceAbbr>
        </Tippy>
        <span> based in New Zealand</span>. I have a diverse range of skills
        bake web and mobile applications. Usually with Laravel, React, React
        Native and Docker.
      </HeroText>
      <SplashParticles />
      <ScrollDownMouse />
    </FullHeightContainer>
  </Layout>
);

export const query = graphql`
  {
    allDataJson {
      nodes {
        about {
          NZExperienceFrom
        }
      }
    }
  }
`;

export default Index;
