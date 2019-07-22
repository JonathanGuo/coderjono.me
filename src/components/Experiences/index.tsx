import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import mediaQuery from 'App/config/mediaQuery';
import { IExperience } from 'App/types/Experience';
import FullScreenContainer from '../Common/FullScreenContainer';
import { SectionTitle } from '../Common/SectionTitle';
import Experience from './Experience';

import './timeline.css';

interface IExperiencesProps {
  experiences: IExperience[];
}

const Timeline = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaQuery.lg} {
  }
`;

const Experiences: React.FunctionComponent<IExperiencesProps> = ({
  experiences,
}) => {
  return (
    <FullScreenContainer>
      <section id="experiences" className="timeline">
        <SectionTitle>
          <FontAwesomeIcon icon="briefcase" />
          Experiences
        </SectionTitle>
        {experiences.map((experience, idx) => (
          <Experience key={idx} experience={experience} />
        ))}
      </section>
    </FullScreenContainer>
  );
};

// tslint:disable-next-line: export-name
export default Experiences;
