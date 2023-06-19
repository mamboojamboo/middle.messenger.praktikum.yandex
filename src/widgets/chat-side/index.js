import { SearchDialog, EditUserProfile } from 'features';
import { Person } from 'entities';

import { INTL } from './constants';
import template from './container/ChatSide.hbs';
import * as styles from './styles/styles.module.css';

import { mockData } from './model';


export const ChatSide = () => {
	const {url, first_name, second_name, profession, chatList} = mockData;

	const mappedChatList = chatList.map(({url, first_name, second_name, profession}) => (
		Person({
			url,
			first_name,
			second_name,
			profession
		})
	));

	return template({
		styles,
		title: INTL.TITLE,
		User: Person({
			url,
			first_name,
			second_name,
			profession
		}),
		EditUserProfile,
		SearchDialog,
		chatList: mappedChatList
	});
};
