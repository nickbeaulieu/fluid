import React from 'react';
export declare const useInput: (initialValue: string) => readonly [string, (event: React.ChangeEvent<HTMLInputElement>) => void, (value: React.SetStateAction<string>) => () => void];
