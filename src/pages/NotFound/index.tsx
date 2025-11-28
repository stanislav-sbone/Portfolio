import type { FC } from 'react';
import { Link } from 'react-router';
import styles from './NotFound.module.css';

const NotFound: FC = () => {
  return (
    <section className={styles.notFound} role="alert" aria-live="polite">
      <div className={styles.container}>
        <span className={styles.errorCode}>404</span>
        <h1 className={styles.title}>
          Упс... Кажется, такой страницы не существует
        </h1>
        <p className={styles.paragraph}>
          Попробуй использовать навигацию в шапке сайта
        </p>
        <Link to="/" className={styles.link}>
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
