import type { FC } from 'react';
import styles from './Contacts.module.css';

const Contacts: FC = () => {
  // TODO: Form handler and use react hook form
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Контакты</h2>
        <p className={styles.subtitle}>
          Свяжитесь со мной, если у вас есть вопросы или предложения
        </p>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <img
                src="/images/gmail.png"
                className={styles.cardIcon}
                alt="gmail"
              />
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>Email</p>
                <a
                  href="mailto:stas.borisenko91@gmail.com"
                  className={styles.cardLink}
                >
                  stas.borisenko91@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <img
                src="/images/telegram.png"
                className={styles.cardIcon}
                alt="telegram"
              />
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>Telegram</p>
                <a
                  href="https://t.me/stasxd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  @stasxd
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <img
                src="/images/github.png"
                className={styles.cardIcon}
                alt="github"
              />
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>GitHub</p>
                <a
                  href="https://github.com/stanislav-sbone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  github.com/stanislav-sbone
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <img
                src="/images/linkedin.svg"
                className={styles.cardIcon}
                alt="linkedin"
              />
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>Linkedin</p>
                <a
                  href="https://www.linkedin.com/in/stanislav-borisenko-091658398/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  stanislav-borisenko
                </a>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default Contacts;
