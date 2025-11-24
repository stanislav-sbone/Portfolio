import type { FC } from 'react';
import styles from './Contacts.module.css';
import Contact from './Contact';
import ContactForm from './ContactForm';
import { contacts } from './ContactsData';

const Contacts: FC = () => {
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
