import type { FC } from 'react';
import { Link, useLocation } from 'react-router';
import styles from './Header.module.css';
import { useTheme } from '../../contexts/ThemeContext';

const Header: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О себе' },
    { path: '/skills', label: 'Навыки' },
    { path: '/projects', label: 'Проекты' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <span className={styles.logo}>Frontend Dev</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
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
