interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Todo list',
    description:
      'Приложение для управления задачами с возможностью добавления, редактирования и удаления задач. Реализована фильтрация и смена темы',
    technologies: ['Typescript', 'React', 'Tailwind', 'TanStack Query'],
    githubUrl: 'https://github.com/stanislav-sbone/Todo_List',
    demoUrl: 'https://todo-list-sbone.vercel.app/',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'Приложение прогноза погоды с использованием OpenWeather API',
    technologies: ['Typescript', 'React', 'CSS Modules', 'Axios'],
    githubUrl: 'https://github.com/stanislav-sbone/Weather_App',
    demoUrl: 'https://weather-app-sbone.vercel.app/',
  },
  {
    id: 3,
    title: 'Crypto Dashboard',
    description: 'Приложение для просмотра текущих цен на криптовалюту',
    technologies: [
      'Typescript',
      'React',
      'Tailwind',
      'Zustand',
      'TanStack Query',
    ],
    githubUrl: 'https://github.com/stanislav-sbone/CryptoDash',
  },
  {
    id: 4,
    title: 'Список героев из аниме Наруто',
    description: 'Приложение для просмотра текущих цен на криптовалюту',
    technologies: ['Typescript', 'React', 'React Router', 'styled-components'],
    githubUrl: 'https://github.com/stanislav-sbone/Naruto',
    demoUrl: 'https://naruto-sbone.vercel.app/',
  },
  {
    id: 5,
    title: 'Личный сайт-портфолио',
    description:
      'Сайт визитка с информацией о себе, проектах, контактах и стеке технологий',
    technologies: ['Typescript', 'React', 'CSS Modules', 'React Router'],
    githubUrl: 'https://github.com/stanislav-sbone/Portfolio',
  },
];
