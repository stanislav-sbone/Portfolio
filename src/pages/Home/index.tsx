import type { FC } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router';

const Home: FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.imageIcon}>👨‍💻</span>
            </div>
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Привет, я{' '}
              <span className={styles.highlight}>
                React Frontend Разработчик
              </span>
            </h1>
            <div className={styles.subtitlesHolder}>
              <p className={styles.subtitle}>
                Уверенно владею{' '}
                <span className={styles.subHighlight}>HTML</span>,
                <span className={styles.subHighlight}> CSS</span>,
                <span className={styles.subHighlight}> JavaScript(ES6+) </span>{' '}
                и<span className={styles.subHighlight}> TypeScript</span>.
              </p>
              <p className={styles.subtitle}>
                Разрабатываю интерфейсы на{' '}
                <span className={styles.subHighlight}>React</span> с
                использованием компонентного подхода, хуков и управления
                состоянием.
              </p>
              <p className={styles.subtitle}>
                Интересуюсь современной{' '}
                <span className={styles.subHighlight}>frontend</span>{' '}
                разработкой и стремлюсь развиваться в команде, создающей удобные
                и производительные web-приложения
              </p>
            </div>
            <div className={styles.buttons}>
              <Link to="/projects" className={styles.primaryButton}>
                Мои проекты
              </Link>
              <Link to="/contacts" className={styles.secondaryButton}>
                Связаться со мной
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
