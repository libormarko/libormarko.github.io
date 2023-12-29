import styled from 'styled-components';
import * as variables from '../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TileWrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${variables.colorBlack};
`;

export const TileInfoWrapper = styled.div`
  text-align: center;
`;

export const TileHeadline = styled.h3`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: ${variables.spacingXS};
  color: ${variables.colorWhite};
`;

export const TileText = styled.p`
  margin: 0 ${variables.spacingL};
`;

export const TileButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${variables.spacingM};
`;

export const ButtonLabel = styled.span`
  margin-right: ${variables.spacingXXS};
`;

export const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
  margin-bottom: 3px;
`;

export const TileImage = styled.img`
  width: calc(100% - 20px);
  height: 60%;
  object-fit: cover;
  padding: 10px;
`;
