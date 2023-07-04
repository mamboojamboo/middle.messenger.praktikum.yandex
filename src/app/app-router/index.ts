import {
  SignInPage,
  SignUpPage,
  ChatPage,
  NotFoundPage,
  ServerErrorPage,
} from 'pages';
import {
  ChatMainEmpty,
  ChatDialog,
  UserProfile,
  UserChangeData,
  UserChangePassword,
} from 'widgets';
import { Router } from 'shared';
import { APP_ROUTES } from './constants';
import { AppContainer } from '../app-container';

const routes = {
  SIGN_IN: new SignInPage(),
  SIGN_UP: new SignUpPage(),
  NOT_FOUND: new NotFoundPage(),
  SERVER_ERROR: new ServerErrorPage(),
  CHAT: new ChatPage({ page: new ChatMainEmpty() }),
  CHAT_PROFILE: new ChatPage({ page: new UserProfile() }),
  CHAT_DIALOG: new ChatPage({ page: new ChatDialog() }),
  CHAT_CHANGE_DATA: new ChatPage({ page: new UserChangeData() }),
  CHAT_CHANGE_PASSWORD: new ChatPage({ page: new UserChangePassword() }),
};

const AppRouter = new Router(routes, AppContainer);
AppRouter.setCurrentRout(APP_ROUTES.SIGN_IN);

if (window.location.href !== `${window.location.origin}/`) {
  AppRouter.setCurrentRout(APP_ROUTES.NOT_FOUND);
}

const handleChangeRout = (event: MouseEvent) => {
  if (!(event.target instanceof HTMLButtonElement)) {
    return;
  }
  const route = event.target.dataset.route || 'NOT_FOUND';
  AppRouter.setCurrentRout(route);
};

export {
  APP_ROUTES, AppRouter, handleChangeRout,
};
