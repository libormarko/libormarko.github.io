import React, { useEffect, useState } from 'react';

export const useDesktopOrMobileView = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.matchMedia(`(min-width: 768px)`).matches
  );

  const setDeviceType = () =>
    window.matchMedia(`(min-width: 768px)`).matches ? setIsDesktop(true) : setIsDesktop(false);

  useEffect(() => {
    window.addEventListener('resize', setDeviceType);
    return () => {
      window.removeEventListener('resize', setDeviceType);
    };
  }, []);

  return isDesktop ? 'desktop' : 'mobile';
};
