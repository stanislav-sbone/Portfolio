import type { FC } from 'react';
import type { Project } from '../../types/project';
import styles from './Projects.module.css';

interface IProps {
  project: Project;
  backdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  closeModal: () => void;
}

const ProjectModal: FC<IProps> = ({ project, backdropClick, closeModal }) => {
  return (
    <div className={styles.backdrop} onClick={backdropClick}>
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{project.title}</h2>
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Закрыть модальное окно"
            >
              ×
            </button>
          </div>
          <div className={styles.modalContent}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.modalImage}
            />
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionTitle}>Описание</p>
              <p className={styles.descriptionValue}>{project.description}</p>
            </div>
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionTitle}>
                Использованные технологии
              </p>
              <p className={styles.descriptionValue}>
                {project.technologies.join(', ')}
              </p>
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
                    Demo
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
