import { useState, useEffect } from 'react';

export default function useDeviceWidth() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWidth(window.innerWidth);
            };

            handleResize()
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return { width };
}
