import { Project } from './project';
import { TourButton } from './tourButton';
import styles from 'styles/projects.module.scss';
import { useProjects } from '../hooks/useProjects';

const { projectPage, layout, buttonWrapper } = styles;

const Projects = () => {
  const { projectList } = useProjects();

  return (
    <div className={projectPage}>
      <div className={layout}>
        {projectList.map((project, i) => (
          <Project
            data={project}
            key={project.name + i + 'project-component'}
          />
        ))}
      </div>
      <div className={buttonWrapper}>
        <TourButton link="/about" text="Continue" />
      </div>
    </div>
  );
};

export default Projects;
