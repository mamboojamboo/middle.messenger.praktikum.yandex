import { Block } from '../utils/block';
import template from './container/Input.hbs';
import styles from './styles/styles.module.css';

type TInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string | null;
  required: boolean;
  attr?: { class: string}
  styles?: string;
}

export class Input extends Block<TInputProps> {
  constructor(props: TInputProps) {
    super('label', { ...props, attr: { class: styles.input__container }, styles });
  }

  render() {
    return this.compile(template, this.props);
  }
}
