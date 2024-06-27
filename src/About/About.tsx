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
import { contentData } from '../contentData';

export const About: React.FC<any> = ({}) => {
  return (
    <AboutWrapper id="About">
      <GetToKnowMe>
        <AboutHeadline>{contentData.about.getToKnowMe.headline}</AboutHeadline>
        <AboutText>
          {contentData.about.getToKnowMe.text.map((textParagraph, index) => {
            return <p key={index}>{textParagraph}</p>;
          })}
        </AboutText>
      </GetToKnowMe>
      <Skills>
        <AboutHeadline>{contentData.about.mySkills.headline}</AboutHeadline>
        <SkillTagsWrapper>
          {contentData.about.mySkills.skillTags.map((skill, index) => {
            return <Tag key={index} label={`#${skill}`} />;
          })}
        </SkillTagsWrapper>
      </Skills>
    </AboutWrapper>
  );
};

export default About;
