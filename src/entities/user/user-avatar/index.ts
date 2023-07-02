import { Block } from 'shared';
import template from './container/UserAvatar.hbs';
import styles from './styles/styles.module.css';

type TUserAvatarProps = {
    url: string;
    name: string;
    attr?: {
        class?: string;
    }
}

export class UserAvatar extends Block<TUserAvatarProps> {
  constructor(props: TUserAvatarProps) {
    super('section', { ...props, attr: { class: styles.container } });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
