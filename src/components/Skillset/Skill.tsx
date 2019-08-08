import React, { FunctionComponent, useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippy.js/react';
import { ISkill } from 'App/types/Skill';
import { diffFromNow } from '../../helpers/DateHelper';
import Rating from './Rating';

interface IProps {
  skill: ISkill;
}

const Skill: FunctionComponent<IProps> = ({ skill }) => {
  const tooltip = useMemo(() => {
    if (skill.tooltip) {
      return skill.tooltip;
    }

    if (skill.experienceFrom) {
      return diffFromNow(skill.experienceFrom) || skill.name;
    }

    return skill.name;
  }, [skill]);

  return (
    <Tippy content={tooltip} arrow={true} followCursor={true} distance={20}>
      <div className="skill">
        <div className="skill-name">
          <div className="icon-wrapper">
            {skill.icon && <FontAwesomeIcon icon={skill.icon} />}
            {skill.image && (
              <img
                className="skill-image-icon"
                src={`icons/${skill.image}`}
                alt={skill.name}
              />
            )}
          </div>
          {skill.name}
        </div>
        <Rating value={skill.rating} />
      </div>
    </Tippy>
  );
};

export default Skill;
