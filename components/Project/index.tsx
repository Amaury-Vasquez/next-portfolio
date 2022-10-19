import { Loader } from '../Loader';
import { useStrings } from '../../hooks/useStrings';
import { useImageLoad } from '../../hooks/useImageLoad';
import { ProjectData } from '../../hooks/useProjects';
import {
  LoadHead,
  LoadBody,
  Links,
  Loading,
  Powered,
  InfoWrapper,
  ProjectImg,
  ProjectInfo,
  ProjectLink,
  ProjectName,
  ProjectSample,
} from './styles';

export const Project = (props: { data: ProjectData }) => {
  // Custom hooks
  const { name, description, powered, repositorie, imageUrl, website } =
    props.data;
  const { img, loaded } = useImageLoad(imageUrl);
  const { toFirstUppercase } = useStrings();

  return !loaded ? (
    <Loading>
      <Loader />
    </Loading>
  ) : (
    <ProjectSample>
      <ProjectName>{toFirstUppercase(name)}</ProjectName>
      <InfoWrapper>
        <ProjectInfo>
          <p>{toFirstUppercase(description)}</p>
          <Powered color={powered.color}>
            {'Powered by: ' + toFirstUppercase(powered.name)}
            {powered.Icon}
          </Powered>
          <Links>
            <ProjectLink
              href={repositorie}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit repositorie
            </ProjectLink>
            {website && (
              <ProjectLink
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to website
              </ProjectLink>
            )}
          </Links>
        </ProjectInfo>
        <ProjectImg src={img} alt={name + ' image'} />
      </InfoWrapper>
    </ProjectSample>
  );
};
