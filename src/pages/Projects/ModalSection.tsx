import type { FC } from 'react';
import styles from './Projects.module.css';

interface ModalSectionProps {
  title: string;
  value: string;
}

const ModalSection: FC<ModalSectionProps> = ({ title, value }) => {
  return (
    <div className={styles.descriptionContainer}>
      <p className={styles.descriptionTitle}>{title}</p>
      <p className={styles.descriptionValue}>{value}</p>
    </div>
  );
};

export default ModalSection;
