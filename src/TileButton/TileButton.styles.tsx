import styled from 'styled-components';
import * as variables from '../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TileButtonWrapper = styled.a`
  display: flex;
  align-items: flex-end;
  color: ${variables.colorBlue};
  cursor: pointer;
  justify-content: center;
  margin: 0 10px 5px 10px;
  text-decoration: none;
`;

export const TileButtonLabel = styled.span`
  margin-right: ${variables.spacingXXS};
  text-wrap: nowrap;
`;

export const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
  margin-bottom: 3px;
`;
