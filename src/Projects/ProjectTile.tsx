import React from 'react';
import {
  ProjectTileWrapper,
  ProjectTileInfoWrapper,
  ProjectTileImage,
  ProjectTileHeadline,
  ProjectTileButtons
} from './Projects.styles';
import { TileButton } from '../TileButton/TileButton';

export interface ProjectTileProps {
  projectData: any;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({ projectData }) => {
  return (
    <ProjectTileWrapper>
      <ProjectTileImage src={projectData.screenshot} alt="project-photo"></ProjectTileImage>
      <ProjectTileInfoWrapper>
        <ProjectTileHeadline>{projectData.headline}</ProjectTileHeadline>
        <ProjectTileButtons>
          {projectData.links.map((link: any, index: any) => {
            return <TileButton label={link.name} link={link} key={index} />;
          })}
        </ProjectTileButtons>
      </ProjectTileInfoWrapper>
    </ProjectTileWrapper>
  );
};

export default ProjectTile;
