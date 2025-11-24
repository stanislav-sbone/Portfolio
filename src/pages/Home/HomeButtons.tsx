import type { FC } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router';

const HomeButtons: FC = () => {
  return (
    <div className={styles.buttons}>
      <Link to="/projects" className={styles.primaryButton}>
        Мои проекты
      </Link>
      <Link to="/contacts" className={styles.secondaryButton}>
        Связаться со мной
      </Link>
    </div>
  );
};

export default HomeButtons;
