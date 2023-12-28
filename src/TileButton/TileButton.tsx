import React from 'react';
import { TileButtonWrapper, TileButtonLabel, FontAwesomeIconWrapper } from './TileButton.styles';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export interface TileButtonProps {
  label: string;
  link?: string;
}

export const TileButton: React.FC<TileButtonProps> = ({ label, link }) => {
  return (
    <TileButtonWrapper href={link} target="_blank">
      <TileButtonLabel>{label}</TileButtonLabel>
      <FontAwesomeIconWrapper icon={faChevronRight} size="xs" />
    </TileButtonWrapper>
  );
};

export default TileButton;
