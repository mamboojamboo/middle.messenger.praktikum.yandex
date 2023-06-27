import { SearchDialog, EditUserProfile } from 'features';
import { Person } from 'entities';
import { INTL } from './constants';
import template from './container/ChatSide.hbs';
import * as styles from './styles/styles.module.css';
import { mockData } from './model';

export const ChatSide = () => {
  const {
    userAvetarUrl, userFirstName, userSecondName, userProfession, chatList,
  } = mockData;

  const mappedChatList = chatList.map(
    ({
      url, firstName, secondName, profession,
    }) => Person({
      url,
      firstName,
      secondName,
      profession,
    }),
  );

  return template({
    styles,
    title: INTL.TITLE,
    User: Person({
      url: userAvetarUrl,
      firstName: userFirstName,
      secondName: userSecondName,
      profession: userProfession,
    }),
    EditUserProfile,
    SearchDialog,
    chatList: mappedChatList,
  });
};
