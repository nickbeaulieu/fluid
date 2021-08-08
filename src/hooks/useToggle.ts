import { useCallback, useState } from 'react';

export const useToggle = (initialOnState: boolean) => {
    const [on, setOn] = useState(initialOnState);
    const toggle = useCallback(() => {
        setOn(!on);
    }, [on]);
    return [on, toggle] as const;
};
