import styles from './Home.module.css';

export const homeParagraphs = [
  {
    key: 'home_text_1',
    text: (
      <>
        Уверенно владею <span className={styles.subHighlight}>HTML</span>,
        <span className={styles.subHighlight}> CSS</span>,
        <span className={styles.subHighlight}> JavaScript(ES6+) </span> и
        <span className={styles.subHighlight}> TypeScript</span>.
      </>
    ),
  },
  {
    key: 'home_text_2',
    text: (
      <>
        Разрабатываю интерфейсы на{' '}
        <span className={styles.subHighlight}>React</span> с использованием
        компонентного подхода, хуков и управления состоянием.
      </>
    ),
  },
  {
    key: 'home_text_3',
    text: (
      <>
        Интересуюсь современной{' '}
        <span className={styles.subHighlight}>frontend</span> разработкой и
        стремлюсь развиваться в команде, создающей удобные и производительные
        web-приложения.
      </>
    ),
  },
] as const;
