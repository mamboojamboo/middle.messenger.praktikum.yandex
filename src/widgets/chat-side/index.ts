import { SearchDialog, EditUserProfile } from 'features';
import { Block } from 'shared';
import { Person } from 'entities';
import { INTL } from './constants';
import template from './container/ChatSide.hbs';
import styles from './styles/styles.module.css';
import { mockData } from './model';

const {
  userAvetarUrl, userFirstName, userSecondName, userProfession, chatList,
} = mockData;

const mappedChatList = chatList.map(
  ({
    url, firstName, secondName, profession,
  }) => new Person({
    url,
    firstName,
    secondName,
    profession,
  }),
);

export class ChatSide extends Block {
  constructor() {
    super('section', { attr: { class: styles.side } });
  }

  init() {
    this.children.user = new Person({
      url: userAvetarUrl,
      firstName: userFirstName,
      secondName: userSecondName,
      profession: userProfession,
    });
    this.children.chatList = mappedChatList;
    this.children.editUserProfile = new EditUserProfile();
    this.children.searchDialog = new SearchDialog();
  }

  render() {
    return this.compile(template, { styles, title: INTL.TITLE });
  }
}
