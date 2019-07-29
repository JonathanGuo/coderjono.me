import React, { FunctionComponent } from 'react';

import { ISkill } from 'App/types/Skill';
import Skill from './Skill';

interface IProps {
  skills: ISkill[];
}

const SkillList: FunctionComponent<IProps> = ({ skills }) => {
  return (
    <div className="tab-content">
      {skills.map(skill => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </div>
  );
};
export default SkillList;
