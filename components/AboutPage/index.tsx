import { useAbout } from "../../hooks/useAbout";
import { Button } from "../../components/Button";
import {
  AboutPage,
  Intro,
  WhoIam,
  Description,
  Info,
  InfoList,
  InfoText,
  ListItem,
  ButtonWrapper,
} from "./styles";

const About = () => {
  const { devSkills, otherSkills } = useAbout();

  return (
    <AboutPage>
      <Intro>
        <WhoIam>About me</WhoIam>
        <Description>
          I am a web developer, specialized in React JS.
        </Description>
      </Intro>

      <Info>
        <InfoText>
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
        </InfoText>
        <InfoList>
          <p> Dev skills</p>
          {devSkills.map((skill, i) => (
            <ListItem color={skill.color} key={"devSkill" + i} n={i}>
              {skill.icon}
              {skill.text}
            </ListItem>
          ))}
        </InfoList>
        <InfoList>
          <p> Other skills</p>
          {otherSkills.map((skill, i) => (
            <ListItem color={skill.color} key={"otherSkill" + i} n={i}>
              {skill.icon}
              {skill.text}
            </ListItem>
          ))}
        </InfoList>
      </Info>
      <ButtonWrapper>
        <Button link="/contact" text="Contact me" />
      </ButtonWrapper>
    </AboutPage>
  );
};

export default About;
