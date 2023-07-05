import { handleValidate } from '../events';
import { Block } from '../utils/block';
import template from './container/Input.hbs';
import styles from './styles/styles.module.css';
import { InputElement } from './ui';

type TInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string | null;
  required: boolean;
  pattern?: string | null;
  title?: string;
  attr?: { class: string}
  styles?: string;
  events?: {
    onblur?: (event: FocusEvent) => void
  }
}

export class Input extends Block<TInputProps> {
  constructor(props: TInputProps) {
    super('label', { ...props, attr: { class: styles.input__container }, styles });
  }

  render() {
    this.children.input = new InputElement({
      attr: {
        type: this.props.type,
        name: this.props.name,
        placeholder: this.props.placeholder,
        required: this.props.required,
        pattern: this.props.pattern,
        title: this.props.title,
        class: styles.input__field,
      },
      styles: styles.input__warning,
      events: {
        blur: (event: FocusEvent) => handleValidate(event),
      },
    });
    return this.compile(template, this.props);
  }
}
