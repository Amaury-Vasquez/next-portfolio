import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const useContact = () => {
  const icons = [
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/vasquezamaury/',
      color: '#f60c56',
    },
    {
      icon: <FaTwitter />,
      link: 'https://twitter.com/AmauryVasquez11',
      color: '#1d9bf0',
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/Amaury-Vasquez/',
      color: 'white',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/amaury-vasquez-9a1b3a240/',
      color: '#0a66c2',
    },
  ];

  return { icons };
};
