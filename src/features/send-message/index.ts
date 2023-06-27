import { AttachFilesToMessage } from '../attach-files-to-message';
import template from './container/SendMessage.hbs';
import styles from './styles/styles.module.css';

export const SendMessage = () => template({
  styles,
  AttachFilesToMessage,
});
