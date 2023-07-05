import { Block } from 'shared';
import template from './container/AppContainer.hbs';
import './styles/index.css';

type TAppContainerProps = {
  page: Block
}

export class AppContainer extends Block<TAppContainerProps> {
  constructor(props: TAppContainerProps) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
