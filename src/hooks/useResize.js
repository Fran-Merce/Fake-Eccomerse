import { useEffect, useState } from 'react';

export const useResize = (mediaQuery = 768) => {
  const [isPhone, setIsPhone] = useState(
    window.innerWidth <= mediaQuery ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth <= mediaQuery) setIsPhone(true);
    else setIsPhone(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return  isPhone ;
};
