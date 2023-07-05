import { Block } from '../../../utils';
import template from './container/InputElement.hbs';

type TInputProps = {
    attr: {
        type: string;
        name: string;
        placeholder: string | null;
        required: boolean;
        pattern?: string | null;
        title?: string;
        class?: string;
    }
    styles?: string;
  events?: {
    blur?: (event: FocusEvent) => void
  }
}

export class InputElement extends Block<TInputProps> {
  constructor(props: TInputProps) {
    super('input', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
