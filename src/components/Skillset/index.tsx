import React, { useEffect, useMemo, useState } from 'react';
import SkillList from './SkillList';
import TabMenuItem from './TabMenuItem';

import { ISkillset } from 'App/types/Skill';

import './skillset.css';

interface IProps {
  skillset: ISkillset;
}

const Skillset: React.FunctionComponent<IProps> = ({ skillset }) => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useEffect(() => {
    const [firstGroup] = Object.keys(skillset);
    if (firstGroup) {
      setActiveGroup(firstGroup);
    }
  }, [skillset]);

  function onTabMenuItemClick(group: string): void {
    setActiveGroup(group);
  }

  const totalMenuitems = Object.keys(skillset).length;
  const skills = useMemo(() => {
    if (!activeGroup) {
      return [];
    }

    const activeSkillsetGroup = skillset[activeGroup];
    return activeSkillsetGroup ? activeSkillsetGroup.data : [];
  }, [activeGroup]);

  return (
    <div className="skill-tabs">
      <nav className="tabs-nav">
        <div className="tabs-menu">
          {Object.entries(skillset).map(([groupName, group]) => (
            <TabMenuItem
              key={groupName}
              name={groupName}
              totalMenuItems={totalMenuitems}
              isActive={groupName === activeGroup}
              icon={group.icon}
              onClick={onTabMenuItemClick}
            />
          ))}
        </div>
      </nav>
      {activeGroup && <SkillList skills={skills} />}
    </div>
  );
};

// tslint:disable-next-line: export-name
export default Skillset;
