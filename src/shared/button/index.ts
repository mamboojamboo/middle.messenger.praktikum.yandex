import { Block } from '../utils/block';
import template from './container/Button.hbs';

type TButtonProps = {
    label: string;
    attr: {
      class: string,
      type: string
    },
    events?: {
      click?: (event: MouseEvent) => void
    }
}

export class Button extends Block<TButtonProps> {
  constructor(props: TButtonProps) {
    super('button', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
