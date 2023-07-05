import { Block } from '../utils';
import template from './container/InfoField.hbs';
import styles from './styles/styles.module.css';

type TInfoFieldProps = {
  header: string;
  name: string;
  value: string;
  pattern?: string;
  title?: string;
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
