import type { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© Stanislav Borisenko | 2025</p>
        <div className={styles.socials}>
          <a
            href="https://t.me/stasxd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="telegram"
            className={styles.link}
          >
            <img
              className={styles.linkImage}
              src="/images/telegram.png"
              alt="telegram"
            />
          </a>
          <a
            href="https://github.com/stanislav-sbone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.link}
          >
            <img
              className={styles.linkImage}
              src="/images/github.png"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/stanislav-borisenko-091658398/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            className={styles.link}
          >
            <img
              className={styles.linkImage}
              src="/images/linkedin.svg"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
