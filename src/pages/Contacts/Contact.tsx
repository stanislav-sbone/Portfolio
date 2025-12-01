import type { FC } from 'react';
import styles from './Contacts.module.css';

interface ContactProps {
  name: string;
  href: string;
  value: string;
  image: string;
}

const Contact: FC<ContactProps> = ({ name, href, value, image }) => {
  return (
    <div className={styles.contactCard}>
      <img src={image} className={styles.cardIcon} alt={name} />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{name}</p>
        <a
          href={name === 'Email' ? `mailto:${href}` : href}
          className={styles.cardLink}
        >
          {value}
        </a>
      </div>
    </div>
  );
};

export default Contact;
