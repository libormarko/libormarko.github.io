import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

export const contentData = {
  navBar: {
    sections: ['About', 'Blog', 'Projects', 'Contact'],
    profile: {
      name: 'Libor Marko',
      photo: 'https://avatars.githubusercontent.com/u/44037760?v=4'
    }
  },
  intro: {
    headline: 'Hey, I am Libor Marko',
    text: 'Senior Frontend Engineer with a continued history of successfully implementing high-quality, performant React applications from scratch, continuous delivery on time and mentoring team members.',
    profilePhoto: 'https://avatars.githubusercontent.com/u/44037760?v=4'
  },
  about: {
    getToKnowMe: {
      headline: 'Get to know me',
      text: [
        'I’m an experienced Frontend Developer with a passion for creating responsive, user-friendly websites. My background in both Web Development and Mechanical Engineering gives me a unique combination of technical skills and problem-solving abilities.',
        'At Accenture, I’ve consistently been delivering a range of web applications, including B2B and B2C digital platforms for major clients in the Automotive, Sport, Fashion and Retail industries. I have a proven track record of delivering high-quality, scalable web applications using modern frontend technologies such as React, Redux and TypeScript, wrapped up in Microfrontend architecture.',
        'With experience working in multicultural Agile teams in Scrum and Kanban setups, I’m a collaborative team player who thrives on learning and sharing knowledge.'
      ]
    },
    mySkills: {
      headline: 'My skills',
      skillTags: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Typescript',
        'Redux',
        'MicroFrontEnd',
        'BFF',
        'FeatureHub',
        'Feature Apps',
        'AEM',
        'GraphQL',
        'Sass',
        'Bootstrap',
        'Unit testing',
        'Jest',
        'Enzyme',
        'Bitbucket',
        'GitHub',
        'Responsive Web Design'
      ]
    }
  },
  blog: {
    headline: 'Blog',
    text: 'Here you can find selection of blog posts, where I share insights from my learnings.',
    blogsData: [
      {
        headline: 'Rebrushed Portfolio Page',
        text: '',
        links: [
          {
            name: 'Medium link',
            url: ''
          }
        ],
        screenshot:
          'https://raw.githubusercontent.com/libormarko/libormarko.github.io/master/screenshot.png'
      },
      {
        headline: 'Book Skate Lessons Project',
        text: '',
        links: [
          {
            name: 'Medium link',
            url: ''
          }
        ],
        screenshot:
          'https://raw.githubusercontent.com/libormarko/Book_Skate_Lessons/main/screenshot.png'
      }
    ]
  },
  projects: {
    headline: 'Projects',
    text: 'Explore collection of projects I’ve been working on.',
    projectsData: [
      {
        headline: 'Rebrushed Portfolio Page',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/libormarko.github.io'
          }
        ],
        screenshot:
          'https://raw.githubusercontent.com/libormarko/libormarko.github.io/master/screenshot.png'
      },
      {
        headline: 'Book Skate Lessons Project',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/libormarko.github.io'
          },
          {
            name: 'Project Link',
            url: 'https://libormarko.github.io/Book_Skate_Lessons/'
          }
        ],
        screenshot:
          'https://raw.githubusercontent.com/libormarko/Book_Skate_Lessons/main/screenshot.png'
      }
    ],
    buttonSeeMoreProjectLabel: 'Load more projects',
    buttonSeeOnGitHubLabel: 'See more on GitHub',
    urlGitHub: 'https://github.com/libormarko'
  },
  contact: {
    headline: 'Contact me',
    text: 'If you are looking for an experienced Senior Frontend Engineer who likes creating well structured, clean code web applications, then I am the ideal candidate for you.',
    contactOptions: [
      {
        name: 'Email',
        icon: faEnvelope,
        link: 'mailto:marko.libor@gmail.com'
      },
      {
        name: 'LinkedIn',
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/libor-marko/'
      },
      {
        name: 'GitHub',
        icon: faGithub,
        link: 'https://github.com/libormarko'
      },
      {
        name: 'Medium',
        icon: faMedium,
        link: 'https://medium.com/@marko.libor'
      }
    ]
  }
};
