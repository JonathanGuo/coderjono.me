import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { formatNZDate } from 'App/helpers/DateHelper';
import { IExperience } from 'App/types/Experience';
import styled from 'styled-components';
import { primaryColor, timelineWidth } from './timelineConfig';

interface IExperienceProps {
  experience: IExperience;
}

const TimelineItemWrapper = styled.div.attrs(props => ({
  className: 'flex w-full py-4 relative',
}))`
  &:after {
    position: absolute;
    content: ' ';
    top: 0;
    bottom: 0;
    left: 30%;
    border-right: ${timelineWidth} solid ${primaryColor};
    margin-left: -0.1rem;
  }
`;

const Experience: React.FunctionComponent<IExperienceProps> = ({
  experience,
}) => {
  return (
    <div className="timeline-item-wrapper">
      <div className="timeline">
        <div className="datetime-wrapper">
          <div className="datetime">
            <span className="start-date">
              {formatNZDate(experience.startDate)}
            </span>
            <span> - </span>
            <span className="end-date">
              {experience.endDate
                ? formatNZDate(experience.endDate)
                : 'Present'}
            </span>
          </div>
        </div>
      </div>
      <div className="details">
        <h3 className="title">
          {experience.jobTitle}, {experience.company}
        </h3>
        <p>
          <span className="inner-block">{experience.type}</span>
        </p>
        {experience.url && (
          <div>
            <a className="mr-2" href={experience.url}>
              {experience.url}
            </a>
            <FontAwesomeIcon icon="external-link-alt" />
          </div>
        )}
        <div className="description">
          <h4>Description:</h4>
          {experience.description && experience.description.length && (
            <ul>
              {experience.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
