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
    text: 'Senior Frontend Engineer with a strong understanding of e-commerce platforms and a proven track record of implementing high-quality, performant React applications from scratch, mentoring teams, and successful continuous delivery on time.',
    profilePhoto: 'https://avatars.githubusercontent.com/u/44037760?v=4'
  },
  about: {
    getToKnowMe: {
      headline: 'Get to know me',
      text: [
        'I am a Senior Frontend Engineer with a passion for creating user-centric digital experiences. With a background in both Web Development and Mechanical Engineering, I bring a unique blend of technical expertise and problem-solving skills to my role.',
        'At a globally renowned consulting agency, I’ve consistently delivered a diverse range of web applications, including B2B and B2C digital platforms for major clients in the Automotive, Sport, Fashion, and Retail industries. I have a proven track record of delivering high-quality, scalable web applications over the past 5+ years. With a strong command of React, Redux, and TypeScript, I possess the core technologies needed to build modern web applications. Additionally, I’ve honed my skills working with micro frontend approaches, backend for frontend architectures, and custom React frameworks like FeatureHub and Feature Apps.',
        'Adept at working within Agile methodologies, I have extensive experience in collaborating with multicultural Scrum teams. I am a team player who thrives in collaborative environments and is always eager to share my knowledge and expertise with junior developers on the team. My passion for continuous learning and innovation drives me to be a lifelong learner, constantly seeking new opportunities to expand my skill set and stay abreast of the latest technologies. I am excited about the ever-evolving landscape of web development, as latest by the emerging topic of Gen AI, which has the potential to make the profession of web developers even more exciting.'
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
    text: 'Delve into my coding journey by exploring selection of my blog posts, where I share insights from my personal projects. Learn from my experiences and gain a glimpse into my passion for web development.',
    blogsData: [
      {
        headline: 'Random Quote Machine',
        text: 'Quotations are repetitions of someone else’s statements or thoughts. People get quite...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/random-quote-machine-b5f7e05bdba6'
          }
        ],
        screenshot: 'https://miro.medium.com/max/924/1*8wNWIJh1hPBoGFxLrYlvUQ.png'
      },
      {
        headline: 'JavaScript Calculator',
        text: 'Everybody knows what is a calculator. The first electronic one was created in the early...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/javascript-calculator-61df22851919'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1094/1*9lzI78MNqwymoy3ICQQVDg.png'
      },
      {
        headline: 'Drum Machine',
        text: 'A drum machine is an electronic musical instrument, it may imitate drum kits or other percussion...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/drum-machine-5242f2a62f75'
          }
        ],
        screenshot: 'https://miro.medium.com/max/821/1*I9W20B8v3FNMF6dOQVXYuA.png'
      },
      {
        headline: 'API Project: Hackernews',
        text: 'I finished this project a while ago. Here is a short brief post about it. Hacker News contains...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/api-project-hackernews-e9213cfe7c0c'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1433/1*hq6b0Dy--KQVDs5df5agtQ.png'
      },
      {
        headline: 'React Markdown Previewer',
        text: 'Markdown is a lightweight markup language with plain text formatting syntax. It is a simple...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/react-markdown-previewer-64fa8d9896c0'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1194/1*eRn7M0UaTHbh5uZRFip9Hg.png'
      },
      {
        headline: 'API Project: Exercise Tracker',
        text: 'API is the acronym for Application Programming Interface that allows two applications to talk to...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/exercise-tracker-b4f9303e0673'
          }
        ],
        screenshot: 'https://miro.medium.com/max/819/1*qVU3Zn_Yf7H0P3ft0p55cw.png'
      },
      {
        headline: 'URL Shortener Microservice',
        text: 'URL stands for Uniform Resource Locator and is used to specify addresses on the World...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/url-shortener-microservice-e841b364155c'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1420/1*nfp2HScPVjJZR7rcPTIdOg.png'
      },
      {
        headline: 'Timestamp Microservice',
        text: 'I read about API, JSON, Node.JS many times since I started to learn web development. Finally...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/api-project-timestamp-microservice-ef860a504738'
          }
        ],
        screenshot: 'https://miro.medium.com/max/854/1*jYCh_p6sHUJh8-EX-qtRUQ.png'
      },
      {
        headline: 'My first React game',
        text: 'Tic Tac Toe is a game everyone knows. I’ve been playing it since I was a little boy. Recently...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/my-first-react-js-game-8d8b8e07731b'
          }
        ],
        screenshot: 'https://miro.medium.com/max/4512/1*XqkLQsvYHcAOcb4gsfKG3Q.jpeg'
      },
      {
        headline: 'Caesars Cipher',
        text: 'I completed another interesting front-end web project whose main purpose is to decrypt an encrypted...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/caesars-cipher-2f1b067b586'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1000/1*MLHAIUDeKvk_IQ65Ctj9lQ.png'
      },
      {
        headline: 'Roman Numeral Converter',
        text: 'Here is a summary of my front-end web project that converts a given number to a Roman numeral...',
        links: [
          {
            name: 'Medium link',
            url: 'https://medium.com/@marko.libor/roman-numeral-converter-ed895971b530'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1000/1*JKBGxAnFaU6v4VU07R1iWQ.png'
      }
    ]
  },
  projects: {
    headline: 'Projects',
    text: 'Join me as I share my commitment for coding and explore selection of projects I’ve tackled for personal growth and enthusiasm.',
    projectsData: [
      {
        headline: 'API Project: Hackernews',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/Hackernews_API'
          },
          {
            name: 'SandBox Link',
            url: 'https://libormarko.github.io/Hackernews/'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1433/1*hq6b0Dy--KQVDs5df5agtQ.png'
      },
      {
        headline: 'React Markdown Previewer',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/React_Markdown_Previewer'
          },
          {
            name: 'SandBox Link',
            url: 'https://codesandbox.io/s/react-markdown-previewer-t7sle'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1194/1*eRn7M0UaTHbh5uZRFip9Hg.png'
      },
      {
        headline: 'API Project: Exercise Tracker',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/Exercise_Tracker'
          },
          {
            name: 'SandBox Link',
            url: 'https://glitch.com/~exercise-tracker-lm'
          }
        ],
        screenshot: 'https://miro.medium.com/max/819/1*qVU3Zn_Yf7H0P3ft0p55cw.png'
      },
      {
        headline: 'URL Shortener Microservice',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/URL_Shortener_Microservice'
          },
          {
            name: 'SandBox Link',
            url: 'https://glitch.com/~url-shortener-lm'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1420/1*nfp2HScPVjJZR7rcPTIdOg.png'
      },
      {
        headline: 'Timestamp Microservice',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/Timestamp_Microservice'
          },
          {
            name: 'SandBox Link',
            url: 'https://glitch.com/~timestamp-microservice-lm'
          }
        ],
        screenshot: 'https://miro.medium.com/max/854/1*jYCh_p6sHUJh8-EX-qtRUQ.png'
      },
      {
        headline: 'Drum Machine',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/Drum_Machine'
          },
          {
            name: 'SandBox Link',
            url: 'https://codesandbox.io/s/drum-machine-8t5dk'
          }
        ],
        screenshot: 'https://miro.medium.com/max/821/1*I9W20B8v3FNMF6dOQVXYuA.png'
      },
      {
        headline: 'JavaScript Calculator',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/Calculator'
          },
          {
            name: 'SandBox Link',
            url: 'https://codesandbox.io/s/javascript-calculator-niglm'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1094/1*9lzI78MNqwymoy3ICQQVDg.png'
      },
      {
        headline: 'Random Quote Machine',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/Random_Quote_Machine'
          },
          {
            name: 'SandBox Link',
            url: 'https://codesandbox.io/s/random-quote-machine-20wo6'
          }
        ],
        screenshot: 'https://miro.medium.com/max/924/1*8wNWIJh1hPBoGFxLrYlvUQ.png'
      },
      {
        headline: 'Tic Tac Toe game',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/Tic_Tac_Toe_Game'
          },
          {
            name: 'SandBox Link',
            url: 'https://codesandbox.io/s/tic-tac-toe-game-mnx4x'
          }
        ],
        screenshot: 'https://miro.medium.com/max/4512/1*XqkLQsvYHcAOcb4gsfKG3Q.jpeg'
      },
      {
        headline: 'Caesars Cipher',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/Caeasar-s_Cipher'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1000/1*MLHAIUDeKvk_IQ65Ctj9lQ.png'
      },
      {
        headline: 'Roman Numeral Converter',
        links: [
          {
            name: 'GitHub Link',
            url: 'https://github.com/libormarko/Roman_Numeral_Converter'
          }
        ],
        screenshot: 'https://miro.medium.com/max/1000/1*JKBGxAnFaU6v4VU07R1iWQ.png'
      }
    ],
    buttonSeeMoreProjectLabel: 'Load more projects',
    buttonSeeOnGitHubLabel: 'See more on GitHub',
    urlGitHub: 'https://github.com/libormarko'
  },
  contact: {
    headline: 'Contact me',
    text: 'If you are seeking a highly skilled and experienced Frontend Engineer who is passionate about creating well structured, clean code application, then I am the ideal candidate for you.',
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
