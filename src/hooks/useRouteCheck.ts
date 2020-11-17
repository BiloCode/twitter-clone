import { useLocation } from '@reach/router';

const useRouteCheck = () => {
  const history = useLocation(),
    pathname = history.pathname.split('/'),
    current = pathname[pathname.length - 1];

  return (path : string) => current === path;
};

export default useRouteCheck;