import { useEffect, useState, useCallback } from 'react';
import { Screen } from 'settings/constants/screen';

const useResize = () => {
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        mobile: window.innerWidth <= Screen.MOBILE,
        mobileSmall: window.innerWidth <= Screen.MOBILE_SMALL,
    });

    const handleResize = useCallback(() => {
        const { innerWidth, innerHeight } = window;

        const width = innerWidth;
        const height = innerHeight;
        const mobile = width <= Screen.MOBILE;
        const mobileSmall = width <= Screen.MOBILE_SMALL;

        setScreen({ width, height, mobile, mobileSmall });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []); // eslint-disable-line

    return { screen };
};

export default useResize;
