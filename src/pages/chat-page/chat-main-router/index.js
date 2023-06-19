import { ChatMainEmpty, ChatDialog, UserProfile, UserChangeData, UserChangePassword } from 'widgets';
import { Router } from 'shared/utils';

import { CHAT_MAIN_ROUTES } from './constants';


const routes = {
	EMPTY: ChatMainEmpty,
	PROFILE: UserProfile,
	DIALOG: ChatDialog,
	CHANGE_DATA: UserChangeData,
	CHANGE_PASSWORD: UserChangePassword
};

const ChatMainRouter = new Router(routes);
ChatMainRouter.setCurrentRout(CHAT_MAIN_ROUTES.EMPTY);

if (window.location.href !== window.location.origin + '/') {
	ChatMainRouter.setCurrentRout(CHAT_MAIN_ROUTES.NOT_FOUND);
};

export {
	CHAT_MAIN_ROUTES,
	ChatMainRouter
};
