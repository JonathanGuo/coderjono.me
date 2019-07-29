import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISkillset } from 'App/types/Skill';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from '../Common/SectionTitle';
import SkillSet from '../Skillset';

interface IPersonalSkillsQuery {
  dataJson: {
    skills: {
      personal: ISkillset;
    };
  };
}

const PersonalSkills: React.FunctionComponent<{}> = props => {
  const data: IPersonalSkillsQuery = useStaticQuery(graphql`
    query PersonalSkillsQuery {
      dataJson {
        skills {
          personal {
            Generals {
              icon
              data {
                name
                rating
              }
            }
            Languages {
              icon
              data {
                name
                rating
                tooltip
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="personal-skills" className="container mx-auto">
      <SectionTitle>
        <FontAwesomeIcon icon="heart" />
        Personal Skills
      </SectionTitle>
      <SkillSet skillset={data.dataJson.skills.personal} />
    </section>
  );
};

export default PersonalSkills;
