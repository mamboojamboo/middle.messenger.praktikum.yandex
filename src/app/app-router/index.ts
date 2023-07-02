import {
  SignInPage,
  SignUpPage,
  ChatPage,
  NotFoundPage,
  ServerErrorPage,
} from 'pages';
import { Router } from 'shared';
import { APP_ROUTES } from './constants';

const routes = {
  SIGN_IN: new SignInPage(),
  SIGN_UP: new SignUpPage(),
  CHAT: new ChatPage(),
  NOT_FOUND: new NotFoundPage(),
  SERVER_ERROR: new ServerErrorPage(),
};

const AppRouter = new Router(routes);
AppRouter.setCurrentRout(APP_ROUTES.SIGN_IN);

if (window.location.href !== `${window.location.origin}/`) {
  AppRouter.setCurrentRout(APP_ROUTES.NOT_FOUND);
}

export { APP_ROUTES, AppRouter };
