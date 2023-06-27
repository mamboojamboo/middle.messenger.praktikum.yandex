import { ErrorContainer } from 'shared';
import { INTL } from './constants';

export const ServerErrorPage = () => ErrorContainer({
  code: INTL.CODE,
  description: INTL.DESCRIPTION,
  buttonLabel: INTL.BUTTON_LABEL,
});
