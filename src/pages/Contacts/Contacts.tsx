import type { FC } from 'react';
import { contacts } from './ContactsData';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { Contact, ContactForm } from './components';
import styles from './Contacts.module.css';

const Contacts: FC = () => {
  useDocumentTitle('Контакты | Портфолио Станислав Борисенко');
  return (
    <section className={styles.contacts}>
      <div className={styles.container}>
        <h2 className={styles.title}>Контакты</h2>
        <p className={styles.subtitle}>
          Свяжитесь со мной, если у вас есть вопросы или предложения
        </p>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            {contacts.map((contact) => (
              <Contact
                key={contact.name}
                name={contact.name}
                href={contact.href}
                value={contact.value}
                image={contact.image}
              />
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
