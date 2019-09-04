import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISkillset } from 'App/types/Skill';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from '../Common/SectionTitle';
import SkillSet from '../Skillset';

interface IProfessionalSkillsQuery {
  dataJson: {
    skills: {
      professional: ISkillset;
    };
  };
}

const ProfessionalSkills: React.FunctionComponent<{}> = props => {
  const data: IProfessionalSkillsQuery = useStaticQuery(graphql`
    query ProfessionalSkillsQuery {
      dataJson {
        skills {
          professional {
            Languages {
              icon
              data {
                experienceFrom
                icon
                name
                rating
              }
            }
            Frameworks: Frameworks___Libraries {
              icon
              data {
                experienceFrom
                icon
                image
                name
                rating
                tooltip
              }
            }
            Database {
              icon
              data {
                experienceFrom
                image
                name
                rating
                tooltip
              }
            }
            Tools {
              data {
                experienceFrom
                icon
                name
                rating
              }
              icon
            }
            Other {
              icon
              data {
                experienceFrom
                name
                rating
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="professional-skills" className="container mx-auto">
      <SectionTitle>
        <FontAwesomeIcon icon="wrench" />
        Professional Skills
      </SectionTitle>
      <SkillSet skillset={data.dataJson.skills.professional} />
    </section>
  );
};

export default ProfessionalSkills;
