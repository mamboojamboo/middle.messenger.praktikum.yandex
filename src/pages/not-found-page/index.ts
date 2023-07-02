import { Block, ErrorContainer } from 'shared';
import { INTL } from './constants';
import template from './container/NotFoundPage.hbs';

export class NotFoundPage extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.error = new ErrorContainer({
      code: INTL.CODE,
      description: INTL.DESCRIPTION,
      buttonLabel: INTL.BUTTON_LABEL,
    });
  }

  render() {
    return this.compile(template, {});
  }
}
