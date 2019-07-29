import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IExperience } from 'App/types/Experience';
import FullScreenContainer from '../Common/FullScreenContainer';
import { SectionTitle } from '../Common/SectionTitle';
import Experience from './Experience';

import './timeline.css';

interface IExperiencesProps {
  experiences: IExperience[];
}

const Experiences: React.FunctionComponent<IExperiencesProps> = ({
  experiences,
}) => {
  return (
    <FullScreenContainer>
      <section id="experiences" className="timeline container mx-auto">
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
