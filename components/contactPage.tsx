import { EmailForm } from './emailForm';
import styles from 'styles/contact.module.scss';
import { useContact } from '../hooks/useContact';

const {
  contactLayout,
  content,
  email,
  emailMessage,
  text,
  socialMedia,
  mediaIcon,
} = styles;

const Contact = () => {
  const { icons } = useContact();

  return (
    <div className={contactLayout}>
      <article className={content}>
        <article className={email}>
          <p className={emailMessage}>
            {`I'm currently looking for job opportunities and freelance projects
            for small business.`}
            <br />
            {`Feel free to send me an email if you're
            interested in my services.`}
          </p>
          <EmailForm />
        </article>
        <p className={text}> You can also find me on social media</p>
        <div className={socialMedia}>
          {icons.map((item, i) => (
            <a
              className={mediaIcon}
              color={item.color}
              href={item.link}
              key={item.link + i}
              rel="noopener noreferrer"
            >
              {<item.icon style={{ color: item.color }} />}
            </a>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Contact;
