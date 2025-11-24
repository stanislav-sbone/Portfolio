import type { FC } from 'react';
import { navItems } from './headerData';
import { Link } from 'react-router';
import { useIsActive } from '../../hooks/useIsActive';
import styles from './Header.module.css';
import ThemeButton from './ThemeButton';

interface IProps {
  setIsOpen: (state: boolean) => void;
}

const BurgerMenu: FC<IProps> = ({ setIsOpen }) => {
  const isActive = useIsActive();
  return (
    <div className={styles.burgerMenu}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${styles.burgerLink} ${isActive(item.path) ? styles.active : ''}`}
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
      <div className={styles.burgerMenuButtons}>
        <ThemeButton />
      </div>
    </div>
  );
};

export default BurgerMenu;
