import { type FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
  const socials = [
    {
      href: 'https://t.me/stasxd',
      name: 'telegram',
      image: '/images/telegram.png',
    },
    {
      href: 'https://github.com/stanislav-sbone',
      name: 'GitHub',
      image: '/images/github.png',
    },
    {
      href: 'https://www.linkedin.com/in/stanislav-borisenko-091658398/',
      name: 'linkedin',
      image: '/images/linkedin.svg',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© Stanislav Borisenko | 2025</p>
        <div className={styles.socials}>
          {socials.map((social) => (
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
