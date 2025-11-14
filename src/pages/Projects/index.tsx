import type { FC } from 'react';
import styles from './Projects.module.css';
import { projects } from './ProjectsData';
import ProjectCard from './Project';

const Projects: FC = () => {
  // TODO: сделать модальное окно с подробным описанием и скрином проекта при клике на карточку
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Проекты</h2>
        <p className={styles.subtitle}>Некоторые из моих pet-проектов</p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
