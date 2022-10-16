import { useContact } from "../../hooks/useContact";
import { EmailForm } from "../../components/EmailForm";
import {
  ContactLayout,
  Content,
  Email,
  EmailMessage,
  Text,
  SocialMedia,
  MediaIcon,
} from "./styles";

const Contact = () => {
  const { icons } = useContact();

  return (
    <ContactLayout>
      <Content>
        <Email>
          <EmailMessage>
            I'm currently looking for job opportunities and freelance projects
            for small business. <br /> Feel free to send me an email if you're
            interested in my services.
          </EmailMessage>
          <EmailForm />
        </Email>
        <Text> You can also find me on social media</Text>
        <SocialMedia>
          {icons.map((item, i) => (
            <MediaIcon
              color={item.color}
              href={item.link}
              key={item.link + i}
              rel="noopener noreferrer"
            >
              {item.icon}
            </MediaIcon>
          ))}
        </SocialMedia>
      </Content>
    </ContactLayout>
  );
};

export default Contact;
