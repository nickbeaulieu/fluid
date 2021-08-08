import React from 'react';

export const useLambda = <T>(initialValue: T) => {
    const [value, setValue] = React.useState(initialValue);
    const setValueLambda = React.useCallback(
        (value: React.SetStateAction<T>) => () => setValue(value),
        [value],
    );
    return [value, setValueLambda, setValue] as const;
};
