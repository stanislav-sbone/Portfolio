import type { FC } from 'react';
import styles from './Projects.module.css';
import type { Project } from '../../types/project';

interface IProps {
  project: Project;
}

const ProjectCard: FC<IProps> = ({ project }) => {
  return (
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
  );
};

export default ProjectCard;
