import { Block } from '../utils/block';
import template from './container/Form.hbs';
import styles from './styles/styles.module.css';

type TFormProps = {
  title: string;
  name?: string;
  styles?: string;
  children: Block[];
  SubmitButton: Block;
  RouteButton?: Block;
  events?: {
    submit?: (event: PointerEvent) => void
  }
}

export class Form extends Block<TFormProps> {
  constructor(props: TFormProps) {
    super('div', { ...props, styles });
  }

  init() {
    this.children.children = this.props.children;
  }

  render() {
    return this.compile(template, this.props);
  }
}
