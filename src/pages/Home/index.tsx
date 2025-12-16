import type { FC } from 'react';
import { homeParagraphs } from './HomeData';
import styles from './Home.module.css';
import HomeButtons from './HomeButtons';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const Home: FC = () => {
  useDocumentTitle('Главная | Портфолио Станислав Борисенко');

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
              {homeParagraphs.map((p) => (
                <p key={p.key} className={styles.subtitle}>
                  {p.text}
                </p>
              ))}
            </div>

            <HomeButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
