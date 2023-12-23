import React from 'react';
import {
  ProjectTileWrapper,
  ProjectTileInfoWrapper,
  ProjectTileImage,
  ProjectTileHeadline,
  ProjectTileButtons
} from './Projects.styles';
import { TileButton } from '../TileButton/TileButton';

export const ProjectTile: React.FC<any> = ({}) => {
  return (
    <ProjectTileWrapper>
      <ProjectTileImage
        src="https://miro.medium.com/v2/resize:fit:1433/1*hq6b0Dy--KQVDs5df5agtQ.png"
        alt="project-photo"
      ></ProjectTileImage>
      <ProjectTileInfoWrapper>
        <ProjectTileHeadline>Project</ProjectTileHeadline>
        <ProjectTileButtons>
          <TileButton label={'GitHub link'} />
          <TileButton label={'Medium link'} />
          <TileButton label={'Test link'} />
        </ProjectTileButtons>
      </ProjectTileInfoWrapper>
    </ProjectTileWrapper>
  );
};

export default ProjectTile;
