import { INTL } from './constants';
import template from './container/ChatMainEmpty.hbs';
import styles from './styles/styles.module.css';

export const ChatMainEmpty = () => template({ styles, emptyLabel: INTL.EMPTY_LABEL });
