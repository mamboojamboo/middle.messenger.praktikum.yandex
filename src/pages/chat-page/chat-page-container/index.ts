import { ChatSide } from 'widgets';
import { ChatMainRouter } from '../chat-main-router';
import template from './container/ChatPage.hbs';
import styles from './styles/styles.module.css';

export const ChatPage = () => {
  const CurrentChatMainPage = ChatMainRouter.getCurrentPage();

  return template({ styles, ChatSide, CurrentChatMainPage });
};
