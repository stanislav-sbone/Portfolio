import type { FC } from 'react';
import styles from './ContactForm.module.css';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return <p className={styles.errorMessage}>{message}</p>;
};

export default ErrorMessage;
