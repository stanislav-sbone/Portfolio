import { type FC } from 'react';
import styles from './Footer.module.css';
import { socialLinks } from './footerData';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © Stanislav Borisenko | {new Date().getFullYear()}
        </p>
        <div className={styles.socials}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={styles.link}
            >
              <img
                src={social.image}
                alt={social.name}
                className={styles.linkImage}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
