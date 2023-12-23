import React from 'react';
import { TileButtonWrapper, TileButtonLabel, FontAwesomeIconWrapper } from './TileButton.styles';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export interface TileButtonProps {
  label: string;
}

export const TileButton: React.FC<TileButtonProps> = ({ label }) => {
  return (
    <TileButtonWrapper>
      <TileButtonLabel>{label}</TileButtonLabel>
      <FontAwesomeIconWrapper icon={faChevronRight} size="xs" />
    </TileButtonWrapper>
  );
};

export default TileButton;
