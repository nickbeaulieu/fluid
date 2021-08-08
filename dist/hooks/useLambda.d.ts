import React from 'react';
export declare const useLambda: <T>(initialValue: T) => readonly [T, (value: React.SetStateAction<T>) => () => void, React.Dispatch<React.SetStateAction<T>>];
