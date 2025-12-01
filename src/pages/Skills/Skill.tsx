import type { FC } from 'react';
import styles from './Skills.module.css';

interface SkillProps {
  name: string;
  icon: string;
}

const Skill: FC<SkillProps> = ({ name, icon }) => {
  return (
    <div className={styles.skill}>
      <img src={icon} alt={name} className={styles.skillImage} />
      <span className={styles.skillName}>{name}</span>
    </div>
  );
};

export default Skill;
