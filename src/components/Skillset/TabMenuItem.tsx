import React, { FunctionComponent, useMemo } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  name: string;
  isActive: boolean;
  totalMenuItems: number;
  icon: IconProp;
  onClick: (name: string) => void;
}

const TabMenuItem: FunctionComponent<IProps> = props => {
  const menuClass = useMemo(() => {
    const classes = ['tabs-menu-item'];

    if (props.isActive) {
      classes.push('active');
    }
    classes.push(`w-1/${props.totalMenuItems}`);

    return classes.join(' ');
  }, [props.isActive]);

  return (
    <button
      type="button"
      className={menuClass}
      onClick={() => props.onClick(props.name)}>
      <FontAwesomeIcon icon={props.icon} size="4x" />
      <h3>{props.name}</h3>
    </button>
  );
};

export default TabMenuItem;
