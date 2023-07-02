import { Block } from '../utils/block';
import template from './containter/ErrorContainer.hbs';
import * as styles from './styles/styles.module.css';

type TErrorContainerProps = {
  code: string;
  description: string;
  buttonLabel: string;
  attr?: {
    class: string,
  };
  styles?: string;
}

export class ErrorContainer extends Block<TErrorContainerProps> {
  constructor(props: TErrorContainerProps) {
    super('div', { ...props, attr: { class: styles.error }, styles });
  }

  render() {
    return this.compile(template, this.props);
  }
}
