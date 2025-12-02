import { useCallback, type FC } from 'react';
import styles from './Projects.module.css';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, onClick }) => {
  const handleCardClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (!target.closest('a')) {
        onClick();
      }
    },
    [onClick],
  );

  return (
    <div
      key={project.id}
      className={styles.projectCard}
      onClick={handleCardClick}
    >
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
            onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => e.stopPropagation()}
          >
            Демо
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
