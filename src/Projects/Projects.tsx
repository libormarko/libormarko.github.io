import React, { useState } from 'react';
import {
  LoadMoreButton,
  ProjectsIntroText,
  ProjectsWrapper,
  ProjectTilesWrapper,
  ProjectsHeadline,
  ProjectsText
} from './Projects.styles';
import { useDesktopOrMobileView } from '../hooks/useDesktopOrMobileView';
import { ProjectTile } from './ProjectTile';
import { contentData } from '../contentData';

export const Projects: React.FC<any> = ({}) => {
  const [projectTilesHeight, setProjectTilesHeight] = useState<number>(920);
  const [loadingMoreProjectsDeltaHeight] = useState<number>(
    useDesktopOrMobileView() === 'desktop' ? 460 : 920
  );
  const [areAllProjectsShownMark] = useState<number>(
    useDesktopOrMobileView() === 'desktop'
      ? Math.ceil(460 * (contentData.projects.projectsData.length / 3))
      : 460 * contentData.projects.projectsData.length
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
    <ProjectsWrapper id="Projects">
      <ProjectsIntroText>
        <ProjectsHeadline>{contentData.projects.headline}</ProjectsHeadline>
        <ProjectsText>{contentData.projects.text}</ProjectsText>
      </ProjectsIntroText>
      <ProjectTilesWrapper height={projectTilesHeight}>
        {contentData.projects.projectsData.map((projectData, index) => {
          return <ProjectTile key={index} projectData={projectData} />;
        })}
      </ProjectTilesWrapper>
      <LoadMoreButton onClick={() => loadMoreProjects()}>
        {areAllProjectTilesShown
          ? contentData.projects.buttonSeeMoreProjectLabel
          : contentData.projects.buttonSeeOnGitHubLabel}
      </LoadMoreButton>
    </ProjectsWrapper>
  );
};

export default Projects;
