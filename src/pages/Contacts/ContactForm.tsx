import { type FC } from 'react';
import {
  useForm,
  type RegisterOptions,
  type SubmitHandler,
} from 'react-hook-form';
import styles from './Contacts.module.css';
import ErrorMessage from './ErrorMessage';
import { sendMessage } from '../../services/api';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const nameOptions: RegisterOptions<Inputs, 'name'> = {
  required: 'Заполните поле с именем',
  validate: (value) => {
    const trimmed = value.trim();
    if (trimmed.length === 0) {
      return 'Заполните поле с именем';
    }
    if (trimmed.length < 2) {
      return 'Минимум 2 символа в имени';
    }
    if (trimmed.length > 20) {
      return 'Максимум 20 символов в имени';
    }
    return true;
  },
};

const emailOptions: RegisterOptions<Inputs, 'email'> = {
  required: 'Заполните поле с email',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Введите корректный email адрес',
  },
};

const messageOptions: RegisterOptions<Inputs, 'message'> = {
  required: 'Заполните поле с сообщением',
  validate: (value) => {
    const trimmed = value.trim();
    if (trimmed.length === 0) {
      return 'Заполните поле с сообщением';
    }
    if (trimmed.length < 10) {
      return 'Сообщение должно содержать минимум 10 символов';
    }
    if (trimmed.length > 1000) {
      return 'Сообщение не должно превышать 1000 символов';
    }
    return true;
  },
};

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await sendMessage(
        data.name.trim(),
        data.email.trim(),
        data.message.trim(),
      );
      console.log(result.message);

      reset();
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Имя
        </label>
        <input
          type="text"
          id="name"
          placeholder="Введите имя"
          className={styles.input}
          {...register('name', nameOptions)}
        />
        <ErrorMessage message={errors.name?.message} />
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
          {...register('email', emailOptions)}
        />
        <ErrorMessage message={errors.email?.message} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Сообщение
        </label>
        <textarea
          id="message"
          placeholder="Введите сообщение"
          className={styles.textarea}
          {...register('message', messageOptions)}
        />
        <ErrorMessage message={errors.message?.message} />
      </div>
      <button type="submit" className={styles.button} disabled={isSubmitting}>
        Отправить сообщение
      </button>
    </form>
  );
};

export default ContactForm;
