import { useEffect, useState, useCallback } from 'react';
import { DESKTOP, MOBILE, MOBILE_SMALL } from 'settings/constants/screen';

const useResize = () => {
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        desktop: window.innerWidth > DESKTOP,
        tablet: window.innerWidth <= DESKTOP && window.innerWidth > MOBILE,
        mobile: window.innerWidth <= MOBILE,
        mobileSmall: window.innerWidth <= MOBILE_SMALL,
    });

    const handleResize = useCallback(() => {
        const { innerWidth, innerHeight } = window;

        const width = innerWidth;
        const height = innerHeight;
        const desktop = width > DESKTOP;
        const tablet = width <= DESKTOP && width > MOBILE;
        const mobile = width <= MOBILE;
        const mobileSmall = width <= MOBILE_SMALL;

        setScreen({ width, height, desktop, tablet, mobile, mobileSmall });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []); // eslint-disable-line

    return { screen };
};

export default useResize;
