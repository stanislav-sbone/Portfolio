import type { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>Frontend Dev</span>
        <nav className={styles.nav}>
          <a className={styles.navLink}>Главная</a>
          <a className={styles.navLink}>О себе</a>
          <a className={styles.navLink}>Навыки</a>
          <a className={styles.navLink}>Проекты</a>
          <a className={styles.navLink}>Контакты</a>
        </nav>
        <div className={styles.headerButtons}>
          <button className={styles.themeButton}>🌙</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
