import { useEffect } from 'react';

/**
 * Render at the root level of the app, or as close as possible.
 * Only needs to be rendered once to do focus disablement for you.
 */
export const FocusCheck: () => null = () => {
    const handleMouseDownOnce = () => {
        document.body.classList.remove('user-is-tabbing');

        window.removeEventListener('mousedown', handleMouseDownOnce);
        window.addEventListener('keydown', handleFirstTab);
    };

    const handleFirstTab = (e: KeyboardEvent) => {
        // the "tab" key
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
            window.addEventListener('mousedown', handleMouseDownOnce);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleFirstTab);
    }, []);
    return null;
};
