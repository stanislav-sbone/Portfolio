import { useCallback, type FC } from 'react';
import type { Project } from '../../../../types/project';
import styles from './ProjectCard.module.css';

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
    <div key={project.id} className={styles.card} onClick={handleCardClick}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
      <img
        src={project.image}
        alt={project.title}
        className={styles.image}
        loading="lazy"
        decoding="async"
      />

      <p className={styles.description}>{project.description}</p>

      <div className={styles.technologies}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
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
