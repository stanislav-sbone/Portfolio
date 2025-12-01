import type { FC } from 'react';
import Skill from './Skill';
import styles from './Skills.module.css';
import type { Skill as SkillType } from '../../types/skill';

interface CategoryProps {
  title: string;
  array: SkillType[];
}

const Category: FC<CategoryProps> = ({ title, array }) => {
  return (
    <>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.skillsHolder}>
        {array.map((skill) => (
          <Skill key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </>
  );
};

export default Category;
