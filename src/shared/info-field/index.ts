import { Block } from '../utils';
import template from './container/InfoField.hbs';
import styles from './styles/styles.module.css';

type TInfoFieldProps = {
  title: string;
  name: string;
  value: string;
  isEdit: boolean;
  attr?: {
    class?: string;
  }
}

export class InfoField extends Block<TInfoFieldProps> {
  constructor(props: TInfoFieldProps) {
    super('div', { ...props, attr: { class: styles.container } });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
