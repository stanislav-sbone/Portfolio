import type { FC } from 'react';
import { Link } from 'react-router';
import { navItems } from './headerData';
import { useIsActive } from '../../hooks/useIsActive';
import styles from './Header.module.css';

const Nav: FC = () => {
  const isActive = useIsActive();

  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
