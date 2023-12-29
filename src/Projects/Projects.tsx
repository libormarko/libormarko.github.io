import React, { useState } from 'react';
import {
  Container,
  LoadMoreButton,
  ProjectsIntroText,
  ProjectsWrapper,
  ProjectTilesWrapper,
  ProjectsHeadline,
  ProjectsText
} from './Projects.styles';
import { useDesktopOrMobileView } from '../hooks/useDesktopOrMobileView';
import { Tile } from '../Tile/Tile';
import { contentData } from '../contentData';

export const Projects: React.FC<any> = ({}) => {
  const [projectTilesHeight, setProjectTilesHeight] = useState<number>(
    useDesktopOrMobileView() === 'desktop' ? 920 : 960
  );
  const [loadingMoreProjectsDeltaHeight] = useState<number>(
    useDesktopOrMobileView() === 'desktop' ? 460 : 960
  );
  const [areAllProjectsShownMark] = useState<number>(
    useDesktopOrMobileView() === 'desktop'
      ? Math.ceil(460 * (contentData.projects.projectsData.length / 3))
      : 480 * contentData.projects.projectsData.length
  );

  const areAllProjectTilesShown = projectTilesHeight < areAllProjectsShownMark;
  const loadMoreProjects = () => {
    setProjectTilesHeight(projectTilesHeight + loadingMoreProjectsDeltaHeight);

    const gitHubUrl = contentData.projects.urlGitHub;
    if (!areAllProjectTilesShown) {
      window.open(gitHubUrl, '_blank')?.focus();
    }
  };

  return (
    <Container id="Projects">
      <ProjectsWrapper>
        <ProjectsIntroText>
          <ProjectsHeadline>{contentData.projects.headline}</ProjectsHeadline>
          <ProjectsText>{contentData.projects.text}</ProjectsText>
        </ProjectsIntroText>
        <ProjectTilesWrapper height={projectTilesHeight}>
          {contentData.projects.projectsData.map((projectData, index) => {
            return <Tile key={index} tileData={projectData} />;
          })}
        </ProjectTilesWrapper>
        <LoadMoreButton onClick={() => loadMoreProjects()}>
          {areAllProjectTilesShown
            ? contentData.projects.buttonSeeMoreProjectLabel
            : contentData.projects.buttonSeeOnGitHubLabel}
        </LoadMoreButton>
      </ProjectsWrapper>
    </Container>
  );
};

export default Projects;
