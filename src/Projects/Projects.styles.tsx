import styled, { css, keyframes } from 'styled-components';
import * as variables from '../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProjectsWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  padding-top: 48px;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    padding-left: ${variables.spacingL};
    padding-right: ${variables.spacingL};
    padding-top: 44px;
  }
`;

export const ProjectsIntroText = styled.div`
  padding: 0 ${variables.spacingXS};

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
  gap: 10px;

  @media only screen and (min-width: ${variables.breakpointM}px) {
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

export const ProjectTileWrapper = styled.div`
  height: 450px;
  width: 100%;
  background-color: ${variables.colorBlack};
  color: ${variables.colorWhite};
  display: flex;
  flex-direction: column;
`;

export const ProjectTileInfoWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectTileHeadline = styled.h3`
  font-size: 20px;
  margin-bottom: ${variables.spacingS};
  color: ${variables.colorWhite};
`;

export const ProjectTileText = styled.p`
  margin-top: 0;
`;

export const ProjectTileButtons = styled.div`
  display: flex;
`;

export const ProjectTileImage = styled.img`
  width: calc(100% - 20px);
  height: 70%;
  object-fit: cover;
  padding: 10px;
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

  &:hover {
    cursor: pointer;
    background-color: ${variables.colorBlue};
  }
`;
