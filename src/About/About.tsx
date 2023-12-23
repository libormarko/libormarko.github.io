import React from 'react';
import {
  AboutWrapper,
  GetToKnowMe,
  AboutText,
  Skills,
  AboutHeadline,
  SkillTagsWrapper
} from './About.styles';
import Tag from '../Tag/Tag';

export const skillLabels = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'Redux',
  'AEM',
  'GraphQL',
  'Sass',
  'Bootstrap',
  'Unit testing',
  'Jest',
  'Enzyme',
  'Bitbucket',
  'GitHub',
  'Responsive Web Design'
];

export const About: React.FC<any> = ({}) => {
  return (
    <AboutWrapper id="About">
      <GetToKnowMe>
        <AboutHeadline>Get to know me</AboutHeadline>
        <AboutText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </AboutText>
      </GetToKnowMe>
      <Skills>
        <AboutHeadline>My skills</AboutHeadline>
        <SkillTagsWrapper>
          {skillLabels.map((skill, index) => {
            return <Tag key={index} label={skill} />;
          })}
        </SkillTagsWrapper>
      </Skills>
    </AboutWrapper>
  );
};

export default About;
