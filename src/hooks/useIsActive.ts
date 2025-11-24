import { useLocation } from 'react-router';

export const useIsActive = () => {
  const location = useLocation();
  return (path: string) => location.pathname === path;
};
