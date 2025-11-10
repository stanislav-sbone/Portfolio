import type { FC } from 'react';
import styles from './About.module.css';

const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>О себе</h1>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.text}>
              Меня зовут{' '}
              <span className={styles.highlight}>Станислав Борисенко</span>, я
              React Frontend разработчик. Создаю современные веб-приложения с
              чистым кодом, продуманным интерфейсом и высокой
              производительностью.
            </p>
            <p className={styles.text}>
              Я закончил Пятигорский Государственный Университет по
              специальности{' '}
              <span className={styles.highlight}>
                "Информационная безопасность"
              </span>{' '}
              (бакалавр) и продолжаю обучение на магистратуре по той же
              специальности. Выбрал Frontend, потому что мне нравится создавать
              интерфейсы, которые удобно использовать, и видеть мгновенный
              результат своей работы.
            </p>
            <p className={styles.text}>
              В работе использую современный стек:{' '}
              <span className={styles.highlight}>
                TypeScript, React, Redux Toolkit, TanStack Query, Zustand и
                React Router
              </span>
              . Стилизую приложения с помощью{' '}
              <span className={styles.highlight}>
                Tailwind CSS, CSS modules и styled-components
              </span>
              . Постоянно совершенствую навыки и слежу за новыми подходами в
              экосистеме React. В будущем планирую стать
              fullstack-разработчиком.
            </p>
            <p className={styles.text}>
              Моя цель — создавать интерфейсы, которые не только работают без
              ошибок, но и доставляют удовольствие пользователю. В каждом
              проекте я стремлюсь к чистоте кода, удобству и продуманной
              архитектуре.
            </p>
            <p className={styles.text}>
              В свободное время реализую пет-проекты, изучаю новые технологии и
              инструменты, смотрю фильмы и сериалы, играю в игры и занимаюсь
              спортом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
