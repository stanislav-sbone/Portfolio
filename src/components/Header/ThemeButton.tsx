import { useTheme } from '../../contexts/ThemeContext';
import styles from './Header.module.css';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.themeButton} onClick={toggleTheme}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeButton;
