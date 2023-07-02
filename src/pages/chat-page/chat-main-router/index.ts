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
  EMPTY: new ChatMainEmpty(),
  PROFILE: new UserProfile(),
  DIALOG: new ChatDialog(),
  CHANGE_DATA: new UserChangeData(),
  CHANGE_PASSWORD: new UserChangePassword(),
};

const ChatMainRouter = new Router(routes);
ChatMainRouter.setCurrentRout(CHAT_MAIN_ROUTES.EMPTY);

export { CHAT_MAIN_ROUTES, ChatMainRouter };
