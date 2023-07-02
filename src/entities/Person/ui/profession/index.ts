import { Block } from 'shared';
import template from './container/Profession.hbs';
import styles from './styles/styles.module.css';

type TProfessionProps = {
    profession: string;
    attr?: {
      class?: string;
    }
}

export class Profession extends Block<TProfessionProps> {
  constructor(props: TProfessionProps) {
    super('span', {
      ...props,
      attr: { class: styles.profession },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
