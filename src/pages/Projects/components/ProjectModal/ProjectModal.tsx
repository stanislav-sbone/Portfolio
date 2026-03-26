import type { FC } from 'react';
import type { Project } from '../../../../types/project';
import ModalSection from './ModalSection';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  backdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  closeModal: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({
  project,
  backdropClick,
  closeModal,
}) => {
  return (
    <div className={styles.backdrop} onClick={backdropClick}>
      <div className={styles.modal}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>{project.title}</h2>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
          </div>
          <div className={styles.content}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />
            <ModalSection title="Описание" value={project.description} />
            <ModalSection
              title="Использованные технологии"
              value={project.technologies.join(', ')}
            />
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionTitle}>Ключевые особенности</p>
              <ul className={styles.featuresList}>
                {project.features.map((feat) => (
                  <li key={feat} className={styles.feature}>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionTitle}>Ссылки</p>
              <div className={styles.descriptionLinks}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.descriptionLink}
                >
                  GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.descriptionLink}
                  >
                    Демо-версия
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
