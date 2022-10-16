import { useProjects } from "../../hooks/useProjects";
import { Button } from "../../components/Button";
import { Project } from "../../components/Project";
import { ProjectPage, Layout, ButtonWrapper } from "./styles";

const Projects = () => {
  const { projectList } = useProjects();

  return (
    <ProjectPage>
      <Layout>
        {projectList.map((project, i) => (
          <Project
            data={project}
            key={project.name + i + "project-component"}
          />
        ))}
      </Layout>
      <ButtonWrapper>
        <Button link="/about" text="Continue" />
      </ButtonWrapper>
    </ProjectPage>
  );
};

export default Projects;
