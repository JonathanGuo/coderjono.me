import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MomentInput } from 'moment';

export interface ISkill {
  name: string;
  rating: number;
  tooltip?: string;
  experienceFrom?: MomentInput;
  icon?: IconProp;
  image?: string;
}

export interface ISkillGroup {
  icon: IconProp;
  data: ISkill[];
}

export interface ISkillset {
  [key: string]: ISkillGroup;
}
