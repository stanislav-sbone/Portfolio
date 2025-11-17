import { type FC } from 'react';
import styles from './Contacts.module.css';

const ContactForm: FC = () => {
  return (
    <form action="" className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Имя
        </label>
        <input
          type="text"
          id="name"
          placeholder="Введите имя"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Введите email"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Сообщение
        </label>
        <textarea
          id="message"
          placeholder="Введите сообщение"
          className={styles.textarea}
          required
        />
      </div>
      <button className={styles.button}>Отправить сообщение</button>
    </form>
  );
};

export default ContactForm;
