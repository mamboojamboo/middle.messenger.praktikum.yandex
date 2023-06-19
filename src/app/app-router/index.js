import { SignInPage, SignUpPage, ChatPage, NotFoundPage, ServerErrorPage } from 'pages';
import { Router } from 'shared/utils';

import { APP_ROUTES } from './constants';


const routes = {
	SIGN_IN: SignInPage,
	SIGN_UP: SignUpPage,
	CHAT: ChatPage,
	NOT_FOUND: NotFoundPage,
	SERVER_ERROR: ServerErrorPage,
}

const AppRouter = new Router(routes);
AppRouter.setCurrentRout(APP_ROUTES.SIGN_IN);

if (window.location.href !== window.location.origin + '/') {
	AppRouter.setCurrentRout(APP_ROUTES.NOT_FOUND);
};

export {
	APP_ROUTES,
	AppRouter
};
