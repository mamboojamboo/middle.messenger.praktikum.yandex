import { AppRouter } from 'app';

window.addEventListener('DOMContentLoaded', () => {
  AppRouter.init();

  if (window.location.href !== `${window.location.origin}/`) {
    AppRouter.setCurrentRout('NOT_FOUND');
  }
});
