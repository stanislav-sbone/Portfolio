import { useState, type FC } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import ThemeButton from './ThemeButton';
import BurgerMenu from './BurgerMenu';
import styles from './Header.module.css';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <span className={styles.logo}>Frontend Dev</span>
        </Link>

        <Nav />

        <div className={styles.headerButtons}>
          <ThemeButton />
        </div>
        <button
          className={`${styles.menuToggle} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={styles.burger}></span>
          <span className={styles.burger}></span>
          <span className={styles.burger}></span>
        </button>

        {isOpen && <BurgerMenu setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};

export default Header;
