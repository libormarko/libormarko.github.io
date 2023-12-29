import React from 'react';
import {
  TileWrapper,
  TileHeadline,
  TileText,
  TileImage,
  TileInfoWrapper,
  TileButtons
} from './Tile.styles';
import { TileButton } from '../TileButton/TileButton';

export interface TileProps {
  tileData: any;
}

export const Tile: React.FC<TileProps> = ({ tileData }) => {
  return (
    <TileWrapper>
      <TileInfoWrapper>
        <TileHeadline>{tileData.headline}</TileHeadline>
        {tileData.text && <TileText>{tileData.text}</TileText>}
        <TileButtons>
          {tileData.links.map((link: any, index: any) => {
            return <TileButton label={link.name} link={link.url} key={index} />;
          })}
        </TileButtons>
      </TileInfoWrapper>
      <TileImage src={tileData.screenshot} alt="project-photo"></TileImage>
    </TileWrapper>
  );
};

export default Tile;
