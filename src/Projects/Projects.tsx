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

export const projects = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'Redux',
  'AEM',
  'GraphQL',
  'Sass',
  'Bootstrap',
  'Unit testing',
  'Jest',
  'Enzyme',
  'Bitbucket',
  'GitHub',
  'Responsive Web Design'
];

export const Projects: React.FC<any> = ({}) => {
  const [projectTilesHeight, setProjectTilesHeight] = useState<number>(920);
  const [loadingMoreProjectsDeltaHeight] = useState<number>(
    useDesktopOrMobileView() === 'desktop' ? 460 : 920
  );
  const [areAllProjectsShownMark] = useState<number>(
    useDesktopOrMobileView() === 'desktop'
      ? Math.ceil(460 * (projects.length / 3))
      : 460 * projects.length
  );

  const areAllProjectTilesShown = projectTilesHeight < areAllProjectsShownMark;
  const loadMoreProjects = () => {
    setProjectTilesHeight(projectTilesHeight + loadingMoreProjectsDeltaHeight);

    const gitHubUrl = 'https://google.sk';
    if (!areAllProjectTilesShown) {
      window.open(gitHubUrl, '_blank')?.focus();
    }
  };

  return (
    <ProjectsWrapper id="Projects">
      <ProjectsIntroText>
        <ProjectsHeadline>Projects</ProjectsHeadline>
        <ProjectsText>
          Selection of personal projects, that I did for fun of learning and coding. More on my
          github Lorem Ipsum Lorem Ipsum...
        </ProjectsText>
      </ProjectsIntroText>
      <ProjectTilesWrapper height={projectTilesHeight}>
        {projects.map((project) => {
          return <ProjectTile>{project}</ProjectTile>;
        })}
      </ProjectTilesWrapper>
      <LoadMoreButton onClick={() => loadMoreProjects()}>
        {areAllProjectTilesShown ? 'Load more projects' : 'Click to see more on GitHub'}
      </LoadMoreButton>
    </ProjectsWrapper>
  );
};

export default Projects;
