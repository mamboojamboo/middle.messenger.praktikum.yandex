import { Block } from 'shared';
import template from './container/FullName.hbs';
import styles from './styles/styles.module.css';

type TFullNameProps = {
  fullName: string;
  attr?: {
    class?: string;
  }
}

export class FullName extends Block<TFullNameProps> {
  constructor(props: TFullNameProps) {
    super('span', {
      ...props,
      attr: { class: styles.fullname },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
