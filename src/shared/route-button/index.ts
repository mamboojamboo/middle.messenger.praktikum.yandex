import { Block } from '../utils/block';
import template from './container/RouteButton.hbs';

type TRouteButton = {
  attr: {
    class: string;
    type: string;
    'data-route': string;
  }
  label: string;
  events?: {
    click?: (event: MouseEvent) => void
  }
}

export class RouteButton extends Block<TRouteButton> {
  constructor(props: TRouteButton) {
    super('button', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
