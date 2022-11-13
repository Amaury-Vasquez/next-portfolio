import { TourButton } from './tourButton';
import { useAbout } from '../hooks/useAbout';
import styles from 'styles/about.module.scss';

const {
  aboutPage,
  intro,
  whoIam,
  description,
  info,
  infoList,
  infoText,
  listItem,
  buttonWrapper,
} = styles;

const About = () => {
  const { devSkills, otherSkills } = useAbout();

  return (
    <div className={aboutPage}>
      <article className={intro}>
        <p className={whoIam}>About me</p>
        <p className={description}>
          I am a web developer, specialized in React JS.
        </p>
      </article>

      <div className={info}>
        <article className={infoText}>
          <p>
            {`I am currently pursuing my third year bachelor degree in computer
            systems, at ESCOM IPN, while also working at different personal
            projects in order to increase mi technical skills.`}
            <br />
            <br />
            {`Coding is my passion, I really enjoy creating stuff and learning new
            skills everyday. Im also currently studying at Platzi in my free
            time. `}
            <br /> <br />
            {`I strongly believe that happiness in life comes from
            becoming better than the one you were the day before. And everyday I
            try my best to remain happy.`}
          </p>
        </article>
        <article className={infoList}>
          <p> Dev skills</p>
          {devSkills.map((skill, i) => (
            <p
              className={listItem}
              style={{
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              }}
              key={'devSkill' + i}
            >
              {skill.icon}
              {skill.text}
            </p>
          ))}
        </article>
        <article className={infoList}>
          <p> Other skills</p>
          {otherSkills.map((skill, i) => (
            <p
              className={listItem}
              style={{
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              }}
              key={'otherSkill' + i}
            >
              {skill.icon}
              {skill.text}
            </p>
          ))}
        </article>
      </div>
      <div className={buttonWrapper}>
        <TourButton link="/contact" text="Contact me" />
      </div>
    </div>
  );
};

export default About;
