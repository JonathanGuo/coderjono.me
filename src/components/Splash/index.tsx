import * as React from 'react';

import Tippy from '@tippy.js/react';
import styled from 'styled-components';

import ScrollDownMouse from 'App/components/ScrollDownMouse';
import { diffFromNow, formatNZDate } from 'App/helpers/DateHelper';
import SplashParticles from './SplashParticles';

interface ISplashProps {
  about: {
    NZExperienceFrom: string;
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

const Splash: React.FunctionComponent<ISplashProps> = ({ about }) => {
  return (
    <FullHeightContainer>
      <HeroText>
        <span>I&rsquo;m a Senior Full Stack Developer who has over </span>
        <Tippy content={`Since ${formatNZDate(about.NZExperienceFrom)}`}>
          <ExperienceAbbr>{diffFromNow(about.NZExperienceFrom)}</ExperienceAbbr>
        </Tippy>
        <span> based in New Zealand</span>. I have a diverse range of skills
        bake web and mobile applications. Usually with Laravel, React, React
        Native and Docker.
      </HeroText>
      <SplashParticles />
      <ScrollDownMouse />
    </FullHeightContainer>
  );
};

// tslint:disable-next-line: export-name
export default Splash;
