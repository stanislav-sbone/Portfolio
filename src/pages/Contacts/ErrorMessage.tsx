import type { FC } from 'react';
import styles from './Contacts.module.css';

interface IProps {
  message?: string;
}

const ErrorMessage: FC<IProps> = ({ message }) => {
  if (!message) return null;
  return <p className={styles.errorMessage}>{message}</p>;
};

export default ErrorMessage;
