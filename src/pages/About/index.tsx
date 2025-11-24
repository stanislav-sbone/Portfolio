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
            {aboutParagraphs.map((text, index) => (
              <p key={index} className={styles.text}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
