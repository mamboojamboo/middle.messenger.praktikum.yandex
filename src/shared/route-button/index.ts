import template from './container/RouteButton.hbs';

type TRouteButton = {
  className: string;
  type: string;
  label: string;
  route: string;
}

export const RouteButton = ({
  className, type, label, route,
}: TRouteButton) => template({
  className, type, label, route,
});
