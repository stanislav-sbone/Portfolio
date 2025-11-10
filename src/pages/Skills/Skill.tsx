import type { FC } from 'react';
import styles from './Skills.module.css';

interface IProps {
  name: string;
  icon: string;
}

const Skill: FC<IProps> = ({ name, icon }) => {
  return (
    <div className={styles.skill}>
      <img src={icon} alt={name} className={styles.skillImage} />
      <span className={styles.skillName}>{name}</span>
    </div>
  );
};

export default Skill;
