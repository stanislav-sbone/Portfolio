import { useEffect, useRef, type FC } from 'react';
import { navItems } from './headerData';
import { Link } from 'react-router';
import { useIsActive } from '../../hooks/useIsActive';
import styles from './Header.module.css';
import ThemeButton from './ThemeButton';

interface IProps {
  setIsOpen: (state: boolean) => void;
  menuToggleRef: React.RefObject<HTMLButtonElement | null>;
}

const BurgerMenu: FC<IProps> = ({ setIsOpen, menuToggleRef }) => {
  const isActive = useIsActive();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeOnOuterTouch = (event: TouchEvent) => {
      const target = event.target as Node;

      if (menuRef.current && !menuRef.current.contains(target)) {
        if (menuToggleRef.current && menuToggleRef.current.contains(target)) {
          return;
        }

        setIsOpen(false);
      }
    };

    document.addEventListener('touchstart', closeOnOuterTouch);
    return () => {
      document.removeEventListener('touchstart', closeOnOuterTouch);
    };
  }, [setIsOpen, menuToggleRef]);

  return (
    <div ref={menuRef} className={styles.burgerMenu}>
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
