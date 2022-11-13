import { SpinLoader } from './spinLoader';
import styles from 'styles/projects.module.scss';
import { useStrings } from '../hooks/useStrings';
import { ProjectData } from '../hooks/useProjects';
import { useImageLoad } from '../hooks/useImageLoad';

const {
  links,
  loading,
  poweredText,
  infoWrapper,
  projectImg,
  projectInfo,
  projectLink,
  projectName,
  projectSample,
} = styles;

export const Project = (props: { data: ProjectData }) => {
  // Custom hooks
  const { name, description, powered, repositorie, imageUrl, website } =
    props.data;
  const { img, loaded } = useImageLoad(imageUrl);
  const { toFirstUppercase } = useStrings();

  return !loaded ? (
    <div className={loading}>
      <SpinLoader />
    </div>
  ) : (
    <div className={projectSample}>
      <span className={projectName}>{toFirstUppercase(name)}</span>
      <div className={infoWrapper}>
        <article className={projectInfo}>
          <p>{toFirstUppercase(description)}</p>
          <span className={poweredText} color={powered.color}>
            {'Powered by: ' + toFirstUppercase(powered.name)}
            {powered.Icon}
          </span>
          <div className={links}>
            <a
              className={projectLink}
              href={repositorie}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit repositorie
            </a>
            {website && (
              <a
                className={projectLink}
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to website
              </a>
            )}
          </div>
        </article>
        <img className={projectImg} src={img} alt={name + ' image'} />
      </div>
    </div>
  );
};
