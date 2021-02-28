import { useLocation } from '@reach/router';

const useRouteCheck = () => {
  const history = useLocation(),
    pathname = history.pathname.split('/');

  return (path : string) => pathname.includes(path);
};

export default useRouteCheck;