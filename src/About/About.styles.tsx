import styled from 'styled-components';
import * as variables from '../variables';

export const AboutWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  min-height: 100vh;
  align-content: center;
  padding: 44px ${variables.spacingXS} 0 ${variables.spacingXS};

  @media only screen and (min-width: ${variables.breakpointM}px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${variables.spacing3XL};
    padding-top: 0px;
    padding-left: ${variables.spacingL};
    padding-right: ${variables.spacingL};
  }
`;

export const GetToKnowMe = styled.div``;

export const AboutText = styled.div`
  text-align: center;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    text-align: unset;
  }
`;

export const SkillsAndExperience = styled.div``;

export const AboutHeadline = styled.h2`
  font-size: 35px;
  font-weight: normal;
  text-align: center;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    text-align: unset;
  }
`;

export const Skills = styled.div``;

export const SkillTagsWrapper = styled.div`
  text-align: center;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    text-align: unset;
  }
`;

export const IndustryExperience = styled.div``;

export const IndustryExperienceTagsWrapper = styled.div``;
