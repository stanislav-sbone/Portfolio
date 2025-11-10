import type { FC } from 'react';
import { backendSkills, frontendSkills, tools } from './skillsData';
import styles from './Skills.module.css';
import Category from './Category';

const Skills: FC = () => {
  const categories = [
    { title: 'Frontend', array: frontendSkills },
    { title: 'Tools', array: tools },
    { title: 'Backend', array: backendSkills },
  ];

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Навыки</h2>
        <p className={styles.subtitle}>
          Технологии и инструменты, с которыми я работаю
        </p>

        <div className={styles.skillsContainer}>
          {categories.map((category) => (
            <Category
              key={category.title}
              title={category.title}
              array={category.array}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
