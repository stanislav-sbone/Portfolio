import type { FC } from 'react';
import styles from './Contact.module.css';

interface ContactProps {
  name: string;
  href: string;
  value: string;
  image: string;
}

const Contact: FC<ContactProps> = ({ name, href, value, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.icon} alt={name} />
      <div className={styles.content}>
        <p className={styles.title}>{name}</p>
        <a
          href={name === 'Email' ? `mailto:${href}` : href}
          className={styles.link}
        >
          {value}
        </a>
      </div>
    </div>
  );
};

export default Contact;
