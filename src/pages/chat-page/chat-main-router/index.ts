import {
  ChatMainEmpty,
  ChatDialog,
  UserProfile,
  UserChangeData,
  UserChangePassword,
} from 'widgets';
import { Router } from 'shared';
import { CHAT_MAIN_ROUTES } from './constants';

const routes = {
  EMPTY: ChatMainEmpty,
  PROFILE: UserProfile,
  DIALOG: ChatDialog,
  CHANGE_DATA: UserChangeData,
  CHANGE_PASSWORD: UserChangePassword,
};

const ChatMainRouter = new Router(routes);
ChatMainRouter.setCurrentRout(CHAT_MAIN_ROUTES.EMPTY);

export { CHAT_MAIN_ROUTES, ChatMainRouter };
