import type { FC } from 'react';
import styles from './About.module.css';
import { aboutParagraphs } from './AboutData';

const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>О себе</h1>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            {aboutParagraphs.map((p) => (
              <p key={p.key} className={styles.text}>
                {p.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
