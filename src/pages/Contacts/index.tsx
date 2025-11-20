import type { FC } from 'react';
import styles from './Contacts.module.css';
import Contact from './Contact';
import ContactForm from './ContactForm';

const Contacts: FC = () => {
  const contacts = [
    {
      name: 'Email',
      href: 'stas.borisenko91@gmail.com',
      value: 'stas.borisenko91@gmail.com',
      image: '/images/gmail.png',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/stasxd',
      value: '@stasxd',
      image: '/images/telegram.png',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/stanislav-sbone',
      value: 'github.com/stanislav-sbone',
      image: '/images/github.png',
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/stanislav-borisenko-091658398/',
      value: 'stanislav-borisenko',
      image: '/images/linkedin.svg',
    },
  ];

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
