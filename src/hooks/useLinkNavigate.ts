import { useNavigate } from '@reach/router';

const useLinkNavigate = () => {
  const navigate = useNavigate();

  return (link : string) => () => {
    navigate(link);
  }
}

export default useLinkNavigate;