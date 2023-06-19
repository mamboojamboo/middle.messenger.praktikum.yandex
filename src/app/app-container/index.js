import { AppRouter } from '../app-router';

import template from './container/AppContainer.hbs';
import './styles/index.css';


export const AppContainer = () => {
	const CurrentPage = AppRouter.getCurrentPage();

	return template({
		CurrentPage
	});
};
