import type { FC } from 'react';
import styles from './Projects.module.css';
import { projects } from './ProjectsData';

const Projects: FC = () => {
  // TODO: сделать модальное окно с подробным описанием и скрином проекта при клике на карточку
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Проекты</h2>
        <p className={styles.subtitle}>Некоторые из моих pet-проектов</p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Демо
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
