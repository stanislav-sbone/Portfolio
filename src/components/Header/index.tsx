import type { FC } from 'react';
import { Link, useLocation } from 'react-router';
import styles from './Header.module.css';
import { useTheme } from '../../contexts/ThemeContext';

const Header: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <span className={styles.logo}>Frontend Dev</span>
        </Link>

        <nav className={styles.nav}>
          <Link
            to="/"
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
          >
            Главная
          </Link>
          <Link
            to="/about"
            className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
          >
            О себе
          </Link>
          <Link
            to="/skills"
            className={`${styles.navLink} ${isActive('/skills') ? styles.active : ''}`}
          >
            Навыки
          </Link>
          <Link
            to="/projects"
            className={`${styles.navLink} ${isActive('/projects') ? styles.active : ''}`}
          >
            Проекты
          </Link>
          <Link
            to="/contacts"
            className={`${styles.navLink} ${isActive('/contacts') ? styles.active : ''}`}
          >
            Контакты
          </Link>
        </nav>

        <div className={styles.headerButtons}>
          <button className={styles.themeButton} onClick={toggleTheme}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
