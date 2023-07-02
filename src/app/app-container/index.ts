import { NotFoundPage } from 'pages';
import { Block } from 'shared';
import { AppRouter } from '../app-router';
import template from './container/AppContainer.hbs';
import './styles/index.css';

export class AppContainer extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.page = AppRouter.getCurrentPage() || new NotFoundPage();
  }

  render() {
    return this.compile(template, {});
  }
}
