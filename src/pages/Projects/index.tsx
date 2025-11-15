import { useState, useEffect, type FC } from 'react';
import styles from './Projects.module.css';
import { projects } from './ProjectsData';
import ProjectCard from './Project';
import type { Project } from '../../types/project';

const Projects: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setIsOpen(true);
    setModalProject(project);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalProject(null);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleCloseModal();
      }
    };

    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Проекты</h2>
        <p className={styles.subtitle}>Некоторые из моих pet-проектов</p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => handleOpenModal(project)}
            />
          ))}
        </div>
      </div>
      {isOpen && modalProject && (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
          <div className={styles.modal}>
            <div className={styles.modalContainer}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{modalProject.title}</h2>
                <button
                  className={styles.closeButton}
                  onClick={handleCloseModal}
                  aria-label="Закрыть модальное окно"
                >
                  ×
                </button>
              </div>
              <div className={styles.modalContent}>
                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  className={styles.modalImage}
                />
                <div className={styles.descriptionContainer}>
                  <p className={styles.descriptionTitle}>Описание</p>
                  <p className={styles.descriptionValue}>
                    {modalProject.description}
                  </p>
                </div>
                <div className={styles.descriptionContainer}>
                  <p className={styles.descriptionTitle}>
                    Использованные технологии
                  </p>
                  <p className={styles.descriptionValue}>
                    {modalProject.technologies.join(', ')}
                  </p>
                </div>
                <div className={styles.descriptionContainer}>
                  <p className={styles.descriptionTitle}>Ссылки</p>
                  <div className={styles.descriptionLinks}>
                    <a
                      href={modalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.descriptionLink}
                    >
                      GitHub
                    </a>
                    {modalProject.demoUrl && (
                      <a
                        href={modalProject.demoUrl}
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
      )}
    </section>
  );
};

export default Projects;
