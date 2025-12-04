import type { FC, ReactElement } from 'react';
import styles from './About.module.css';

interface AccordionItemProps {
  id: string;
  title: string;
  text: ReactElement;
  isOpened: boolean;
  onToggle: (id: string) => void;
}

const AccordionItem: FC<AccordionItemProps> = ({
  id,
  title,
  text,
  isOpened,
  onToggle,
}) => {
  const handleClick = () => {
    onToggle(id);
  };

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={handleClick}>
        <h3 className={styles.accordionTitle}>{title}</h3>
        <svg
          className={`${styles.arrowDown} ${isOpened ? styles.arrowRotated : ''}`}
          viewBox="0 0 30.727 30.727"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
            l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"
          />
        </svg>
      </button>
      <div
        className={`${styles.textContainer} ${isOpened ? styles.textContainerOpened : ''}`}
      >
        <div className={styles.accordionText}>{text}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
