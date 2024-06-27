import React from 'react';
import {
  TileWrapper,
  TileHeadline,
  TileText,
  TileImage,
  TileInfoWrapper,
  TileButtons,
  TileImageWrapper
} from './Tile.styles';
import { TileButton } from '../TileButton/TileButton';

export interface TileProps {
  tileData: any;
  isSliderTile?: boolean;
}

export const Tile: React.FC<TileProps> = ({ tileData, isSliderTile }) => {
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
      <TileImageWrapper isSliderTile={isSliderTile}>
        <TileImage src={tileData.screenshot} alt="project-screenshot"></TileImage>
      </TileImageWrapper>
    </TileWrapper>
  );
};

export default Tile;
