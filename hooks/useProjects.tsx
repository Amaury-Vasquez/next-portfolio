import { FaReact } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs } from 'react-icons/si';

interface Tech {
  name: string;
  Icon: JSX.Element;
  color: string;
}

export interface ProjectData {
  name: string;
  description: string;
  powered: Tech;
  repositorie: string;
  imageUrl: string;
  website?: string;
}

export const useProjects = () => {
  const projectList: ProjectData[] = [
    {
      name: 'amvas games',
      description:
        'project created to recolect some simple games created at individual pages and gather them together.',
      powered: {
        name: 'react',
        Icon: <FaReact />,
        color: 'var(--blue)',
      },
      repositorie: 'https://github.com/Amaury-Vasquez/amvas-games',
      imageUrl: 'https://i.imgur.com/KoQhZik.png',
      website: 'https://games.amauryvasquez.com/',
    },
    {
      name: 'Kanto pokedex',
      description: 'Simple pokedex of the original kanto pokemons',
      powered: {
        name: 'next',
        Icon: <SiNextdotjs />,
        color: '#FFFFFF',
      },
      repositorie: 'https://github.com/Amaury-Vasquez/pokedex',
      imageUrl: 'https://i.imgur.com/Dezmss5.png',
      website: 'https://pokedex.amauryvasquez.com/',
    },
    {
      name: 'portfolio v1',
      description:
        'previous portfolio with a minimalistic design, currently outdated.',
      powered: {
        name: 'react',
        Icon: <FaReact />,
        color: 'var(--blue)',
      },
      repositorie: 'https://github.com/Amaury-Vasquez/updated-portfolio',
      imageUrl: 'https://i.imgur.com/4WHrC2l.png?2',
      website: 'https://v1.amauryvasquez.com/',
    },
    {
      name: 'c++ snake game',
      description: 'Classic snake game created for GNU/Linux OS.',
      powered: {
        name: 'c++',
        Icon: <SiCplusplus />,
        color: 'var(--blue)',
      },
      repositorie: 'https://github.com/Amaury-Vasquez/Cpp-snake-game',
      imageUrl: 'https://i.imgur.com/7q8sc4h.jpg',
    },
  ];

  return { projectList };
};
