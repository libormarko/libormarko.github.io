import styled from 'styled-components';
import * as variables from '../variables';

export const Container = styled.div`
  background: ${variables.colorGrey00};
`;

export const AboutWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  align-content: center;
  padding: ${variables.spacingXXL} ${variables.spacingM} ${variables.spacing3XL}
    ${variables.spacingM};

  @media only screen and (min-width: ${variables.breakpointM}px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${variables.spacing3XL};
    padding: ${variables.spacing4XL} 0px;
    max-width: 85%;
  }
  @media only screen and (min-width: ${variables.breakpointL}px) {
    max-width: 75%;
    grid-column-gap: ${variables.spacing5XL};
  }
  @media only screen and (min-width: ${variables.breakpointXL}px) {
    max-width: 65%;
  }
  @media only screen and (min-width: ${variables.breakpointXXL}px) {
    max-width: 55%;
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
