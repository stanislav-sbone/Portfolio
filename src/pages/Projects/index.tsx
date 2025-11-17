import { useState, useEffect, type FC } from 'react';
import styles from './Projects.module.css';
import { projects } from './ProjectsData';
import ProjectCard from './ProjectCard';
import type { Project } from '../../types/project';
import ProjectModal from './ProjectModal';

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
        <ProjectModal
          project={modalProject}
          backdropClick={handleBackdropClick}
          closeModal={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Projects;
