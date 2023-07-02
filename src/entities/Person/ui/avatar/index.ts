import { Block } from 'shared';
import template from './container/Avatar.hbs';
import styles from './styles/styles.module.css';

type TAvatarProps = {
  url: string;
  alt: string;
}

export class Avatar extends Block<TAvatarProps> {
  constructor(props: TAvatarProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
