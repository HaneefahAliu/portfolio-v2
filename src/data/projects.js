import Twikkie from '../assets/images/twikkie.png';
import TwikkieDS from '../assets/images/twikkie.png';
import ForWheels from "../assets/images/forwheels.png"
import PlatePal from '../assets/images/PP.png';
import EduLearn from '../assets/images/SL.png';

const projects = [
    {
      id: '1',
      route: 'twikkie',
      title: 'Twikkie',
      image: Twikkie, // Path to your project image
      description: 'Maximizing Workplace Potential: An All-in-One Cloud Solution for People Management', 
      locked: true,
      featured: true,
    },
    {
      id: '2',
      route: 'twikkieds',
      title: 'Twikkie - design system',
      image: TwikkieDS,
      description: 'Twikkie Design System',
      locked: true,
      featured: false,
    },
    {
      id: '3',
      route: 'forwheels',
      title: 'Forwheels',
      image: ForWheels, // Path to your project image
      description: 'Revolutionizing Automotive Services using Augmented Reality.', 
      locked: true,
      featured: true,
    },
    {
      id: '4',
      route: 'platepal',
      title: 'PlatePal',
      image: PlatePal,
      description: 'Building Better Eating Habits through Smart Meal Planning Technology.',
      locked: true,
      featured: false,
    },
    {
      id: '5',
      route: 'https://medium.com/@haneefahaliu/edulearn-a-ux-case-study-f9071fb39613',
      title: 'EduLearn',
      image: EduLearn,
      description: 'Expanding Classroom Boundaries With Smart Teaching Solutions',
      locked: true,
      featured: false,
    },
];

export default projects;


