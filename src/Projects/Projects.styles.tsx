import styled from 'styled-components';
import * as variables from '../variables';

export const Container = styled.div`
  background: ${variables.colorGrey10};
`;

export const ProjectsWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  text-align: center;
  padding: ${variables.spacingXXL} 0;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    padding: ${variables.spacing3XL} 0 ${variables.spacingXXL} 0;
  }
`;

export const ProjectsIntroText = styled.div`
  padding: 0 ${variables.spacingM};

  @media only screen and (min-width: ${variables.breakpointM}px) {
    padding: 0;
  }
`;

export const ProjectTilesWrapper = styled.div<{ height: number }>`
  display: grid;
  max-height: ${(props) => props.height}px;
  transition: max-height 0.3s cubic-bezier(0.3, 0, 0, 1);
  overflow: hidden;
  grid-template-columns: 1fr;
  gap: 30px;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ProjectsHeadline = styled.h2`
  font-size: 35px;
  font-weight: normal;
  margin-bottom: ${variables.spacingS};
`;

export const ProjectsText = styled.p`
  margin-bottom: ${variables.spacing3XL};
  margin-top: 0;
`;

export const LoadMoreButton = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  border: none;
  background-color: ${variables.colorGrey30};
  color: ${variables.colorWhite};
  font-size: 16px;
  transition:
    background-color 0.5s cubic-bezier(0.3, 0, 0, 1),
    width 0.5s cubic-bezier(0.3, 0, 0, 1);
  margin-top: ${variables.spacingL};

  &:hover {
    cursor: pointer;
    background-color: ${variables.colorBlue};
  }
`;
