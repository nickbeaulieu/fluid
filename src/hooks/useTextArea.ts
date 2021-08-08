import React from 'react';
import { useLambda } from './useLambda';

export const useTextArea = (initialValue: string) => {
    const [value, setValueLambda, setValue] = useLambda(initialValue);
    const onChange = React.useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setValue(event.target.value),
        [value],
    );

    return [value, onChange, setValueLambda] as const;
};
